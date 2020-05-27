import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {auth} from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logeado: any = false;
  public email: string;

  constructor(public afAuth: AngularFireAuth) 
  {
    afAuth.authState.subscribe(user=>(this.logeado = user))
  }

  RegistrarUsuario(email:string, contraseña: string)
  {
    return new Promise((resolve, reject)=>
    {
      this.afAuth.createUserWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
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



  LoginUsuario(email: string, contraseña: string)
  {
   
    return new Promise((resolve, reject)=>
    {
      this.afAuth.signInWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
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
