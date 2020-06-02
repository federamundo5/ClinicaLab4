import { Component, OnInit } from '@angular/core';
import {EspecialidadesService} from '../../servicios/especialidades.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {TurnoServiceService} from '../../servicios/turno-service.service'


@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {
  especialidades = [];
   profesionales = [];
   horarios = [];

   minDate: Date;
   maxDate: Date;
  constructor(private especialidadesService: EspecialidadesService, 
    private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService) {


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
    this.usuariosService.getProfesionalesAprobados().subscribe(profesionales=>{
      this.profesionales=profesionales;
    })



    //fecha
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = today.getDay();
let prevMonth = (month === 0) ? 11 : month -1;
let nextMonth = (month === 11) ? 0 : month + 4;
this.minDate = new Date(2020, 5, 1); 
this.maxDate = new Date(2020, 5, 15); 

//horarios

 this.horarios = this.turnoService.horarios();

   }

  ngOnInit(): void {
  }

}
