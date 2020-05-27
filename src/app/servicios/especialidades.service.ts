import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../clases/especialidad';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private httpClient:HttpClient,     private firestore: AngularFirestore
    ) { }


  //Obtiene todos los gatos
  public obtenerEspecialidades() {
    return this.firestore.collection('especialidades').snapshotChanges();
  }



  public especialidadesUsuario(especialidades,email ) {


    especialidades.forEach(element => {
      let data = {
        especialidad: element,
        email: email,
      }
      this.firestore.collection('especialidadUsuario').add(data);
    });
    

   // return this.firestore.collection('usuarios').add(data);
  }

  private listaEspecialidades( datos: Object ){
    let especialidades:Especialidad[] = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let especialidad:Especialidad=new Especialidad(key,datos[key].nombre);
          especialidades.push(especialidad);
        
    })
    return especialidades;
  }


}
