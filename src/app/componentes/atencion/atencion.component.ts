import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {TurnoServiceService} from '../../servicios/turno-service.service'
import { Router } from '@angular/router';
import { Turno } from 'src/app/clases/turno';
import { Validators } from '@angular/forms';

import {dynamic} from '../../clases/dynamic'


@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {

 idturno;
 turno;
 edad;
 presion;
 temperatura;
datosParticulares:Array<dynamic> = [];

ValorParticular;
TituloParticular;
datos;
mensajeError;
error = false;
maximo = false;
  constructor(private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService, private router : Router) { 

    this.turno = (this.router.getCurrentNavigation().extras.state.turno); 
    this.idturno = this.turno.identificador;
  }

  ngOnInit(): void {

  }

  agregarDato()
{
  var dato = {
    dato: this.TituloParticular,
    valor: this.ValorParticular,
  }
  this.datosParticulares.push(dato);
  this.TituloParticular ="";
  this.ValorParticular = "";
}


TerminarAtencion()
{
  console.log(this.edad);
  console.log(this.temperatura);
  console.log(this.presion);
  console.log(this.edad);
  console.log(this.idturno);
  console.log(this.datosParticulares);
  var dato:any = {}

dato["temperatura"] = this.temperatura;
dato["presion"] = this.temperatura;
dato["edad"] = this.temperatura;

  dato.temperatura = this.temperatura;
  dato.presion = this.presion;
  dato.edad = this.edad;
  this.datosParticulares.forEach(element => {
    dato[element.dato] = element.valor;
  });

  console.log(dato);

  let data = {
    idTurno: this.idturno,
    datosParticulares: this.datosParticulares,
    profesional: this.turno.profesionalNombre + " " + this.turno.profesionalApellido,
    paciente: this.turno.pacienteNombre + " " + this.turno.pacienteApellido,
    fecha: this.turno.fecha,
    especialidad: this.turno.especialidad,
    datos : dato
  }


  this.error = false;
 if(this.Validar()){
  this.turnoService.AltaDatosConsulta(data);
  this.router.navigate(['/Encuesta'], { state: { turno: this.turno } });
}
}

Validar()
{
  if(this.edad == undefined || this.temperatura == undefined || this.presion == undefined)
  {
    console.log("aqui");
    this.error = true;
    this.mensajeError= "ERROR! complete los datos necesarios.";
    return false;
  }
  else{
  return true;
}
}


}
