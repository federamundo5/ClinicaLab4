import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor( private firestore: AngularFirestore) { 
    
  }

  public newUser(data: {nombre: string, apellido: string, email: string, perfil:string}) {
    return this.firestore.collection('usuarios').add(data);
  }

  public getUser(documentId: string) {
    return this.firestore.collection('usuarios').doc(documentId).snapshotChanges();
  }
  
  public getUsers() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }
}
