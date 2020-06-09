import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth-service.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TurnoServiceService {

  constructor( private firestore: AngularFirestore, private authService: AuthService,private httpClient: HttpClient) { 
    
  }



  public altaTurno(especialidad,fecha,hora,pacienteNombre,pacienteEmail,pacienteApellido,profesionalEmail,profesionalNombre,profesionalApellido,estado ) {


      let data = {
        fecha: fecha,
        hora: hora,
        pacienteNombre: pacienteNombre,
        pacienteEmail: pacienteEmail,  
        pacienteApellido: pacienteApellido,
        profesionalEmail: profesionalEmail,
        profesionalNombre: profesionalNombre,
        profesionalApellido: profesionalApellido,
        especialidad : especialidad,
        estado :estado
      }
      this.firestore.collection('turnos').add(data);

  }

public AltaDatosConsulta(idTurno, temperatura,presion,edad, datosParticulares)
{
    let data = {
      idTurno: idTurno,
      temperatura: temperatura,
      presion: presion,
      edad: edad,  
      datosParticulares: datosParticulares,
    }
    this.firestore.collection('datosConsulta').add(data);

}

  public obtenerTurno<T>(documentId: string) {
    return this.firestore.collection('turnos').doc(documentId).snapshotChanges();
  }

  public obtenerTurnosPaciente<T>(email){   

    
    var parameter = "pacienteEmail";


    return this.firestore.collection<T>("turnos", ref => ref.where(parameter,'==', email )).valueChanges({idField: 'identificador'});
  }


  public obtenerTurnosProfesional<T>(email){   

    
    var parameter = "profesionalEmail";


    return this.firestore.collection<T>("turnos", ref => ref.where(parameter,'==', email )).valueChanges({idField: 'identificador'});
  }


    public actualizaTurno(documentId: string, data: any) {
      return this.firestore.collection('turnos').doc(documentId).set(data);
    }


  public horarios(){
    let horarios=[];
    
    horarios.push("8:00");
    horarios.push("9:00");
    horarios.push("10:00");
    horarios.push("11:00");
    horarios.push("12:00");
    horarios.push("13:00");
    horarios.push("14:00");
    horarios.push("15:00");
    horarios.push("16:00");
    horarios.push("17:00");
    horarios.push("18:00");
    horarios.push("19:00");
    return horarios;
  }


  
  public dias(){
    let dias=[];
    
    dias.push("Lunes");
    dias.push("Martes");
    dias.push("Miercoles");
    dias.push("Jueves");
    dias.push("Viernes");
    dias.push("Sabado");

    return dias;
  }

}
