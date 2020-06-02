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
}
