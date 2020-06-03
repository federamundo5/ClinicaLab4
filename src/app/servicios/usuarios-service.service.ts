import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth-service.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {
users;


  constructor( private firestore: AngularFirestore, private authService: AuthService,private httpClient: HttpClient) { 
    
  }

  public newUser(data: {nombre: string, apellido: string, email: string, perfil:string}) {
    return this.firestore.collection('usuarios').add(data);
  }

  public getUser(documentId: string) {
    return this.firestore.collection('usuarios').doc(documentId).snapshotChanges();
  }
  
  public getUsersSnapshot() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }


  ObtenerUsuario<T>(param,value){
    var entity = 'usuarios';

    return this.firestore.collection<T>(entity, ref => ref.where(param,'==', value )).valueChanges();

  }  


  public getUsers():Observable<any[]>{

    
    return this.firestore.collection("usuarios").snapshotChanges().pipe(
      map( actions=> 
        actions.map(a=>{
          const data = a.payload.doc.data();

          return data;
        }))
    );
  }


 


  public getProfileUser(){


    var perfil;
    this.authService.afAuth.user.subscribe(datos=>{
      var p = this.getUsers();
      p.forEach(element => {
        element.forEach(element2 => {
             if(datos.email == element2.email)
                {
                perfil = element2.perfil;
                console.log ("estoy aca..");
               }
         });        
        });
      }) 
      console.log("retornando..");
      return perfil;
  }




  public getProfesionales(){   

    var parameter = "perfil";
    var value ="Profesional";
    return this.firestore.collection<"usuarios">("usuarios", ref => ref.where(parameter,'==', value )).valueChanges();
  }


  
  public getUserbyStorage(){   
    var getUser = window.localStorage.getItem("User");
    if(getUser != null){
      console.log(getUser);
    var parameter = "email";
    return this.firestore.collection<"usuarios">("usuarios", ref => ref.where(parameter,'==', getUser )).valueChanges();
  }
  }

  public getProfesionalesNoAprobados(){   

    var parameter = "perfil";
    var value ="Profesional";
    var parameter2 = "aprobado";
var value2 = false;
    return this.firestore.collection<"usuarios">("usuarios", ref => ref.where(parameter,'==', value ).where(parameter2,'==', value2 )).valueChanges({idField: 'identificador'});
  }

  public getProfesionalesAprobados(){   

    var parameter = "perfil";
    var value ="Profesional";
    var parameter2 = "aprobado";
var value2 = true;
    return this.firestore.collection<"usuarios">("usuarios", ref => ref.where(parameter,'==', value ).where(parameter2,'==', value2 )).valueChanges({idField: 'identificador'});
  }

  public Aprobar(usuario){

    var parameter = "email";

        var usuariObtenido = this.firestore.collection("usuarios").doc(usuario);

        return usuariObtenido.update({
            aprobado: true
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        })
        
    }

  




  private filtraPersonas(mail,lista){
    var persona;
    lista().forEach(element=>{
      if(mail == element.mail){
        persona=element;
      }
    })
    return persona;
  }

  private filtraProfesionales(lista){

    console.log(lista);

    let usuarios=[];
    this.armarLista(lista).forEach(element=>{
      if(element.tipo == "Profesional"){
        usuarios.push(element);
      }
    })
    return usuarios;
  }

  private armarLista( datos: Object ){
    const usuarios = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let usuario: any = datos[key];
          usuario.id=key;
          usuarios.push(usuario);
        
    })
    return usuarios;
  }

}
