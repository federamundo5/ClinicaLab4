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



  public especialidadesUsuario(especialidades,email,nombre,apellido ) {


    especialidades.forEach(element => {
      let data = {
        especialidad: element,
        email: email,
        nombre: nombre,
        apellido: apellido
      }
      this.firestore.collection('especialidadUsuario').add(data);
    });

    
  }


  BorrarEspecialidades(emailuser){
    var entity = 'especialidadUsuario';
    var param = 'email';
    
    var jobskill_query = this.firestore.collection(entity, ref => ref.where(param,'==', emailuser ));

    jobskill_query.get().subscribe(delitems => delitems.forEach( doc=> doc.ref.delete()));


    return true;
  }





  ObtenerEspecialidadUsuario<T>(emailuser){
    var entity = 'especialidadUsuario';
    var param = 'email';
    return this.firestore.collection<T>(entity, ref => ref.where(param,'==', emailuser )).valueChanges();
  }  



  
  ObtenerUsuariosEspecialidad<T>(especialidad){
    var entity = 'especialidadUsuario';
    var param = 'especialidad';
    return this.firestore.collection<T>(entity, ref => ref.where(param,'==', especialidad )).valueChanges();
  }  



  public nuevaEspecialidad(especialidad: string) {
    
    let data = {
      especialidad: especialidad
    }
    return this.firestore.collection('especialidades').add(data);
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
