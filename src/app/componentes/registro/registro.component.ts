import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../servicios/auth-service.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import { FileServiceService } from 'src/app/servicios/file-service.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Usuario} from '../../clases/usuario'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 
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
perfilYaLogeado;
    imagen1Alta;
    imagen2Alta;
user;
    captchaResuelto;
usuarios = [];
users : Usuario[];    

//6Lcv5fgUAAAAALZuvhQHpOBljPWXfGeD165TICyR LOCALHOST

//6LfeDQAVAAAAACskyUmyU1aHDmg4_pN_l8bfP8Kt HEROKU CAPTCHA
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
  


       
    var getUser = window.localStorage.getItem("User");

    this.usuariosService.ObtenerUsuario<Usuario>("email",getUser).subscribe(users=>{
            this.users=users;
            users.forEach(user => {
              if(user.perfil == "Admin"){
                this.perfilYaLogeado = true;
                console.log(this.perfilYaLogeado);
              }
            });
          })    

  }



  resolved(captchaResponse: string, res) {
    this.captchaResuelto = true;
    console.log(`Resolved response token: ${captchaResponse}`);
   
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
     if(this.perfil == "Profesional"){
      this.especialidadesService.especialidadesUsuario(this.especialidadSeleccionada,this.email,this.nombre,this.apellido);
    }

    window.localStorage.setItem("User",this.email);
      this.router.navigate(['/Home']);
    }).catch(error => console.log("Error:", error));
    

 

    console.log(this.email,this.especialidadSeleccionada,this.imagen1,this.imagen2,this.nombre,this.apellido,this.clave);
  }





  newUser()
{
  this.fileService.subirArchivo(this.email+"_img1",this.imagen1,{Nombre:this.nombre, Apellido: this.apellido, email: this.email}).then((img)=>{
    this.fileService.subirArchivo(this.email+"_img2",this.imagen2,{Nombre:this.nombre, Apellido: this.apellido, email: this.email}).then(img2=>{
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
          imagen2: this.imagen2Alta,
          aprobado: false
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
