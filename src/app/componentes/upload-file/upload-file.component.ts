import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Output() datosImagen = new EventEmitter<any>();

  imgURL;
  archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  
  public datosFormulario = new FormData();
  public nombreArchivo = '';

  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
        this.datosImagen.emit(this.datosFormulario.get('archivo'));
      }
    }
  }
  
  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
