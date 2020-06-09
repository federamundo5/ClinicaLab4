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


  ObtenerHorasUsuario<T>(emailuser){
    var entity = 'horasProfesional';
    var param = 'email';
    return this.firestore.collection<T>(entity, ref => ref.where(param,'==', emailuser )).valueChanges();
  }  

  ObtenerDiasUsuario<T>(emailuser){
    var entity = 'diasProfesional';
    var param = 'email';
    return this.firestore.collection<T>(entity, ref => ref.where(param,'==', emailuser )).valueChanges();
  }  


  BorrarDias(emailuser){
    var entity = 'diasProfesional';
    var param = 'email';
    
    var jobskill_query = this.firestore.collection(entity, ref => ref.where(param,'==', emailuser ));

    jobskill_query.get().subscribe(delitems => delitems.forEach( doc=> doc.ref.delete()));


    return true;
  }



  BorrarHoras(emailuser){
    var entity = 'horasProfesional';
    var param = 'email';
    
    var jobskill_query = this.firestore.collection(entity, ref => ref.where(param,'==', emailuser ));

    jobskill_query.get().subscribe(delitems => delitems.forEach( doc=> doc.ref.delete()));


    return true;
  }



  public altaHoras(horas,email,nombre,apellido ) {


    horas.forEach(element => {
      let data = {
        hora: element,
        email: email,
        nombre: nombre,
        apellido: apellido
      }
      this.firestore.collection('horasProfesional').add(data);
    });
  }


  public altaDias(dias,email, nombre,apellido ) {


    dias.forEach(element => {
      let data = {
        dias: element,
        email: email,
        nombre: nombre,
        apellido: apellido
      }
      this.firestore.collection('diasProfesional').add(data);
    });
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

  public getProfesionalesAprobados<T>(){   

    
    var parameter = "perfil";
    var value ="Profesional";
    var parameter2 = "aprobado";
var value2 = true;


    return this.firestore.collection<T>("usuarios", ref => ref.where(parameter,'==', value ).where(parameter2,'==', value2 )).valueChanges({idField: 'identificador'});
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

  





}
