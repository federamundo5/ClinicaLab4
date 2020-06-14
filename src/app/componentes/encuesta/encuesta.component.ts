import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {TurnoServiceService} from '../../servicios/turno-service.service'
import { Router } from '@angular/router';
import { Turno } from 'src/app/clases/turno';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  idturno;
  turno;
  resena;
  comportamiento;
  salud;
  capacidad;
  constructor(private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService, private router : Router) {
    
    this.turno = (this.router.getCurrentNavigation().extras.state.turno); 
    this.idturno = this.turno.identificador;
  
   }

  ngOnInit(): void {
    this.EstadoPendienteReseña(this.turno);
  }


  EstadoPendienteReseña(turno)
  {
      turno.estado = "Pendiente Reseña Profesional";
    this.turnoService.actualizaTurno(turno.identificador, turno).then(() => {
      console.log('Documento editado exitósamente');
    }, (error) => {
      console.log(error);
    }); 
  }


  Guardar(){
    console.log(this.resena);
    console.log(this.comportamiento);
    console.log(this.salud);
    console.log(this.capacidad);

    let data = {
      idTurno: this.idturno,
      resena: this.resena,
      salud: this.salud,
      capacidad: this.capacidad,  
    }

    this.turnoService.AltaDatosEncuestaProfesional(data);
    this.EstadoPendientePaciente(this.turno);
    this.router.navigate(['/Perfil']);

  }

  EstadoPendientePaciente(turno)
  {
      turno.estado = "Pendiente Encuesta Usuario";
    this.turnoService.actualizaTurno(turno.identificador, turno).then(() => {
      console.log('Documento editado exitósamente');
    }, (error) => {
      console.log(error);
    }); 
  }

}
