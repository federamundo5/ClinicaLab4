import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../servicios/auth-service.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import { FileServiceService } from 'src/app/servicios/file-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public users = [];

  /* constructor( private miConstructor:FormBuilder) { }
   email=new FormControl('',[Validators.email]);
   formRegistro:FormGroup=this.miConstructor.group({
     usuario:this.email
   });*/
 
 
   email: string = "";
   clave: string = "";
   nombre: string = "";
   apellido: string = "";
   especialidadSeleccionada;
   especialidades = [];
   profesional=false;
   perfilSeleccionado = false;
  paciente;
perfil;
    lenghtError = false;
    imagen1;
    imagen2;

    imagen1Alta;
    imagen2Alta;
  constructor(  private authService: AuthService,  private router: Router,      private constructorForm: FormBuilder,   private especialidadesService: EspecialidadesService, 
    private usuariosService: UsuariosServiceService, private fileService: FileServiceService  )
   {  
   }  


   
   ngOnInit() {
    this.especialidadesService.obtenerEspecialidades().subscribe((catsSnapshot) => {
      this.especialidades = [];
      catsSnapshot.forEach((catData: any) => {
        this.especialidades.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }

  Registrar()
  {


    
    if (this.clave.length < 6)
    {
      this.lenghtError = true;
    }
    


    this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>  
    {
      
     this.newUser();
      this.especialidadesService.especialidadesUsuario(this.especialidadSeleccionada,this.email);
      this.router.navigate(['/Home']);
    }).catch(error => console.log("Error:", error));
    

 


    console.log(this.email,this.especialidadSeleccionada,this.imagen1,this.imagen2,this.nombre,this.apellido,this.clave);
  }


  newUser()
{
  this.fileService.subirArchivo(this.email+"_img1",this.imagen1,{persona:this.nombre+" "+this.apellido}).then((img)=>{
    this.fileService.subirArchivo(this.email+"_img2",this.imagen2,{persona:this.nombre+" "+this.apellido}).then(img2=>{
     img.ref.getDownloadURL().then(data=>{
      this.imagen1Alta = data;
      img2.ref.getDownloadURL().then(data2=>{
        this.imagen2Alta =data2;

        let data = {
          nombre: this.nombre,
          email: this.email,
          apellido: this.apellido,
          perfil: this.perfil,
          imagen1: this.imagen1Alta,
          imagen2: this.imagen2Alta
        }

        this.usuariosService.newUser(data).then(() => {
          console.log('Usuario creado exitósamente!');
        }, (error) => {
          console.error(error);
        });        
      });
     });  
    });
  });
}


  obtieneImagen1( imagen ){
    this.imagen1 = imagen;
  }

  obtieneImagen2( imagen2 ){
    this.imagen2 = imagen2;
  }


  selectProfesional(){
    this.perfilSeleccionado = true;
    this.profesional = true;
    this.perfil = "Profesional";
  }

  selectPaciente(){
    this.perfilSeleccionado = true;
    this.profesional = false;
    this.perfil = "Paciente"
  }
  
  selectAdmin(){
    this.perfilSeleccionado = true;
    this.profesional = false;
    this.perfil = "Admin";
  }
}
