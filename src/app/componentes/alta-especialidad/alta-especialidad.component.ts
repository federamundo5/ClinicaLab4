import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';

@Component({
  selector: 'app-alta-especialidad',
  templateUrl: './alta-especialidad.component.html',
  styleUrls: ['./alta-especialidad.component.css']
})
export class AltaEspecialidadComponent implements OnInit {

  especialidad;
  mensajeRetorno;

  constructor(private especialidadesService: EspecialidadesService) { }

  ngOnInit(): void {
  }

Nueva(){

  this.especialidadesService.nuevaEspecialidad(this.especialidad)
  console.log("Se dio de alta la especialidad.")
  this.mensajeRetorno = "Se dio de alta la especialidad correctamente";
}


}
