import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../clases/especialidad';
import { AngularFireStorage } from '@angular/fire/storage';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private db: AngularFireStorage) { }

  public subirArchivo(nombreArchivo: string, datos: any,metadata:any) {
    return this.db.upload(nombreArchivo, datos, {customMetadata:metadata});
  }

  public getArchivo(nombreArchivo: string) {
        return this.db.ref(nombreArchivo).getDownloadURL();
  }

}
