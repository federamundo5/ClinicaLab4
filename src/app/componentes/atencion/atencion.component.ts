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

  let data = {
    idTurno: this.idturno,
    temperatura: this.temperatura,
    presion: this.presion,
    edad: this.edad,  
  }
  this.datosParticulares.forEach(element => {
    data[element.dato] = element.valor;
  });

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
