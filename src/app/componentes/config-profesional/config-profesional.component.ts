import { Component, OnInit } from '@angular/core';
import { TurnoServiceService } from 'src/app/servicios/turno-service.service';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';
import {especialidadUsuario} from '../../clases/especialidadUsuario'
import {horasUsuario} from '../../clases/horasUsuario'
import {diasUsuario} from '../../clases/diasUsuario'
import {Usuario} from '../../clases/usuario'

import {  Router } from '@angular/router';

@Component({
  selector: 'app-config-profesional',
  templateUrl: './config-profesional.component.html',
  styleUrls: ['./config-profesional.component.css']
})
export class ConfigProfesionalComponent implements OnInit {
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  especialidades = [];
  especialidadesUsuario = [];
   dias = [];
   horarios = [];
   user;
 nombre;
 apellido;
   diasSeleccionados = [];
   horariosSeleccionados = [];

  constructor(private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService, private especialidadesService: EspecialidadesService, private router:Router) { }

  ngOnInit(): void {
    this.horarios = this.turnoService.horarios();
     this.dias = this.turnoService.dias();
     this.user  = window.localStorage.getItem("User");
 console.log(this.user);

     this.usuariosService.ObtenerUsuario<Usuario>("email",this.user).subscribe(users=>{
      users.forEach(user => {
          this.nombre = user.nombre;    
          this.apellido = user.apellido;              
          
      });        
})
console.log(this.nombre);


          this.especialidadesService.ObtenerEspecialidadUsuario<especialidadUsuario>(this.user).subscribe(especialidades=>{
            especialidades.forEach(especialidad => {
                this.especialidadesUsuario.push(especialidad.especialidad);
              })
             })    

             this.usuariosService.ObtenerDiasUsuario<diasUsuario>(this.user).subscribe(horas=>{
              horas.forEach(especialidad => {
                  this.diasSeleccionados.push(especialidad.dias);
                })
               })    

               this.usuariosService.ObtenerHorasUsuario<horasUsuario>(this.user).subscribe(dias=>{
                dias.forEach(especialidad => {
                    this.horariosSeleccionados.push(especialidad.hora);
                  })
                 })    


                       //especialidades
          this.especialidadesService.obtenerEspecialidades().subscribe((catsSnapshot) => {
            this.especialidades = [];
            catsSnapshot.forEach((catData: any) => {
              this.especialidades.push({
                id: catData.payload.doc.id,
                data: catData.payload.doc.data()
              });
            })
          });      




          console.log(this.diasSeleccionados);
          console.log(this.horariosSeleccionados);
      
  }


  Configurar(){

    

    if(this.especialidadesService.BorrarEspecialidades(this.user))
    this.especialidadesService.especialidadesUsuario(this.especialidadesUsuario,this.user,this.nombre,this.apellido);



    if(this.usuariosService.BorrarHoras(this.user))
       this.usuariosService.altaHoras(this.horariosSeleccionados, this.user,this.nombre,this.apellido);


       if(this.usuariosService.BorrarDias(this.user))
       this.usuariosService.altaDias(this.diasSeleccionados, this.user,this.nombre,this.apellido);

       this.router.navigate(['Perfil']);
    }

}
