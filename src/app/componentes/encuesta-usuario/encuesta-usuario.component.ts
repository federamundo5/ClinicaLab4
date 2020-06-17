import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {TurnoServiceService} from '../../servicios/turno-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-usuario',
  templateUrl: './encuesta-usuario.component.html',
  styleUrls: ['./encuesta-usuario.component.css']
})
export class EncuestaUsuarioComponent implements OnInit {
  idturno;
  turno;
  resena;
  calificacionEstablecimiento;
  calificacionPuntualidad;
  observaciones;
  calificacionDoctor;
  constructor(private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService, private router : Router) {
    this.turno = (this.router.getCurrentNavigation().extras.state.turno); 
    this.idturno = this.turno.identificador;
   }

  ngOnInit(): void {
    console.log(this.idturno);
    this.turnoService.ObtenerTextoReseña(this.idturno).subscribe(turnos=>{
      turnos.forEach(turno => {
        console.log(turno);
          this.resena = turno;              
      });     

      this.calificacionDoctor = 3;
      this.calificacionEstablecimiento = 3;
      this.calificacionPuntualidad = 3;

    
  })
}

enviarEncuesta(){
  console.log(this.calificacionDoctor);
  console.log(this.calificacionEstablecimiento);
  console.log(this.calificacionPuntualidad);
  let data = {
    idTurno: this.idturno,
    calificacionDoctor: this.calificacionDoctor,
    calificacionEstablecimiento: this.calificacionEstablecimiento,
    calificacionPuntualidad: this.calificacionPuntualidad,
    observaciones: this.observaciones
  }

  this.EstadoCerrado(this.turno);
  this.turnoService.AltaDatosEncuestaUsuario(data);
  this.router.navigate(['/Perfil']);
}






EstadoCerrado(turno)
{
    turno.estado = "Cerrado";
  this.turnoService.actualizaTurno(turno.identificador, turno).then(() => {
    console.log('Documento editado exitósamente');
  }, (error) => {
    console.log(error);
  }); 
}



}
