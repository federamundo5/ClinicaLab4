import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {TurnoServiceService} from '../../servicios/turno-service.service'
import {especialidadUsuario} from '../../clases/especialidadUsuario'
import {horasUsuario} from '../../clases/horasUsuario'
import {diasUsuario} from '../../clases/diasUsuario'
import {Usuario} from '../../clases/usuario'
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {
  especialidades = [];
  profesionales:Usuario[]=[];
  fecha;
   horarios = [];
   myFilter;
   minDate: Date;
   maxDate: Date;
   profesionalSeleccionado;
   especialidadSeleccionada;
   error = false;
   mensajeError;
diaSeleccionado;
tablaVisible = false;
  constructor(private especialidadesService: EspecialidadesService, 
    private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService, private router:Router) {


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

      //profesionales
    this.usuariosService.getProfesionalesAprobados<Usuario>().subscribe(profesionales=>{
      profesionales.forEach(profesionalidad => {
        this.profesionales.push(profesionalidad);
        console.log(this.profesionales);
      })
    })

this.myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
  }
  
    //fecha
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = today.getDay();

this.minDate = new Date(2020, 5, 11); 
this.maxDate = new Date(2020, 5, 25); 

//horarios

   }

  ngOnInit(): void {
    this.profesionalSeleccionado = -1;
   this.especialidadSeleccionada = "Quiropractico";
  }


  Buscar(){
this.tablaVisible = false;

    if(this.Validar()){
     this.diaSeleccionado =  this.TraduccionDia(this.fecha.getDay());
var existedia = false;

 this.usuariosService.ObtenerDiasUsuario<diasUsuario>((this.profesionalSeleccionado)).subscribe(dias=>{
  dias.forEach(dia => {
    console.log(dia.dias);
           if(dia.dias == this.diaSeleccionado)
             {
               console.log("true");
                existedia = true;
                this.error = false;
              }
           })
           if ( existedia == false){
            this.error = true;
           this.mensajeError = "El profesional no atiende en el dia solicitado."
          }else{
            this.CargarTablaDisponibles()
          }
 })
}
}


Validar(){
  var retorno = false;
  if(this.profesionalSeleccionado != undefined && this.fecha != undefined && this.especialidadSeleccionada != undefined)
 { retorno = true;
 }
  else
  {
    this.error = true;
    this.mensajeError = "Por favor seleccione las opciones solicitadas."
  }
  return retorno;
}



  CargarTablaDisponibles(){
    this.horarios.length = 0;
    this.tablaVisible = true;
    this.usuariosService.ObtenerHorasUsuario<horasUsuario>(this.profesionalSeleccionado).subscribe(horarios=>{
      horarios.forEach(horario => {
        if(this.diaSeleccionado != 'Sabado')
        this.horarios.push(horario);
        else{
          if(horario.hora != '15:00' && horario.hora != "16:00" && horario.hora != "17:00" && horario.hora != "18:00" && horario.hora != "19:00")
          this.horarios.push(horario);
        }
      })
    })

    this.horarios.sort((a, b) => (a.hora < b.hora ? -1 : 1));
    this.horarios.sort((a,b) => a.hora.localeCompare(b.hora));

  }


TraduccionDia(dia)
{
  if(dia == 0){
   return "Domingo";
  }
  if(dia == 1){
    return "Lunes";
   } 
    if(dia == 2){
    return "Martes";
   } 
    if(dia == 3){
    return "Miercoles";
   } 
    if(dia == 4){
    return "Jueves";
   }

   
   if(dia == 5){
    return "Viernes";
   }

   if(dia == 6){
    return "Sabado";
   }

}


  EspecialidadesChange(especialidad){

  this.profesionales.length = 0;
    this.especialidadesService.ObtenerUsuariosEspecialidad<Usuario>((this.especialidadSeleccionada)).subscribe(profesionales=>{
      profesionales.forEach(profesionalidad => {
        if(!this.profesionales.includes(profesionalidad))
        this.profesionales.push(profesionalidad);
              })
    })

    if(!(this.profesionales.includes(this.profesionalSeleccionado)) && this.profesionales.length > 0)
    {
       this.profesionalSeleccionado = -1;
    }

    console.log(this.profesionales);
}

sacarTurno(horario){
  var getUser = window.localStorage.getItem("User");
var nombrePaciente;
var ApellidoPaciente;
  this.usuariosService.ObtenerUsuario<Usuario>("email",getUser).subscribe(users=>{
          users.forEach(user => {
            nombrePaciente = user.nombre;
            ApellidoPaciente = user.apellido;
            })
            this.turnoService.altaTurno(this.especialidadSeleccionada,this.diaSeleccionado,this.fecha,horario.hora,nombrePaciente,getUser,ApellidoPaciente,horario.email,horario.nombre,horario.apellido, "Pendiente Aprobacion Profesional")
          })
          this.router.navigate(['TurnoSolicitado']);

}



}
