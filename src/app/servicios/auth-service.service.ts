import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

import {auth} from 'firebase/app';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logeado: any = false;
  public userLogged;
  public usuario:Observable<firebase.User>;
public userId;
  constructor(public afAuth: AngularFireAuth) 
  {
    afAuth.authState.subscribe(user=>(this.logeado = user))
    this.usuario = this.afAuth.authState;
    this.userLogged = this.afAuth.currentUser;
  }

  RegistrarUsuario(email:string, contraseña: string)
  {
    return new Promise((resolve, reject)=>
    {
      this.afAuth.createUserWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
    });
  }

 

 public Logueado(){

  console.log("aca");
  return this.afAuth.currentUser.then(resp=>{
    if(resp){
      console.log("true");
      return true;
    }else{
      console.log("false");
      return false;
    }
  })
}


public currentUser(){
  return this.afAuth.currentUser;
}


  LoginUsuario(email: string, contraseña: string)
  {

    return new Promise((resolve, reject)=>
    {
      this.afAuth.signInWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
    });


  } 
  
  
  ObtenerUsuario(){
    this.afAuth.onAuthStateChanged(function(user) {
    if (user) {
      window.localStorage.setItem("User",user.email);
      return user.email;
    } else {
      // No user is signed in.
    }
  });
}



  LogoutUsuario()
  {
    return this.afAuth.signOut();
  }

  isAuth() 
  {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
  


}
