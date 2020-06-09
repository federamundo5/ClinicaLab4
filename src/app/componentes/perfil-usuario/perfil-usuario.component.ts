import { Component, OnInit } from '@angular/core';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {Usuario} from '../../clases/usuario'
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { FileServiceService } from 'src/app/servicios/file-service.service';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  users : Usuario[];    
  especialidades = [];
  aprobado = "Aprobado";
  imagen;
  constructor(private usuariosService: UsuariosServiceService, private especialidadService: EspecialidadesService, private fileService: FileServiceService) { }
email : string;
  ngOnInit(): void {
           
    var getUser = window.localStorage.getItem("User");

    this.usuariosService.ObtenerUsuario<Usuario>("email",getUser).subscribe(users=>{
            this.users=users;
            users.forEach(user => {
              if(user.aprobado == false && user.perfil == "Profesional"){
                this.aprobado = "No Aprobado";
                this.email = user.email;
              }
              this.especialidadService.ObtenerEspecialidadUsuario(getUser).subscribe(especialidades=>{
                console.log(especialidades);
                this.especialidades = especialidades;
                 })    
            });        
          

            this.fileService.getArchivo(getUser+"_img1").subscribe( img=>{
              this.imagen = img;
           });
            
   
          })    



          


          
  }

}
