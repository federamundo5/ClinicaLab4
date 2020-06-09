import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {TurnoServiceService} from '../../servicios/turno-service.service'
import { Router } from '@angular/router';
import { Turno } from 'src/app/clases/turno';
import { Validators } from '@angular/forms';
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
datosParticulares = [];
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
  console.log(this.datosParticulares);
}


TerminarAtencion()
{
  console.log(this.edad);
  console.log(this.temperatura);
  console.log(this.presion);
  console.log(this.edad);
  console.log(this.idturno);
  console.log(this.datosParticulares);

  this.error = false;
  if(this.Validar())
  this.turnoService.AltaDatosConsulta(this.idturno, this.temperatura,this.presion,this.edad,this.datosParticulares);
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
