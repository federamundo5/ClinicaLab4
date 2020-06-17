import { Component, OnInit } from '@angular/core';
import { TurnoServiceService } from 'src/app/servicios/turno-service.service';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
turnos;
turnosFiltrados=[];
especialidad;
temperatura;
profesional;
paciente;
campo;
turnoSelected;
abierto = false;
fecha;

  constructor(private turnosService: TurnoServiceService, private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService) {
    this.turnosService.obtenerTurnosFull().subscribe((resp=>{
      this.turnos = resp;
      this.turnosFiltrados = resp;
         console.log(resp);
    }));
  }
   

  ngOnInit(): void {
  }

  Buscar(){
    this.turnosFiltrados=[];
    console.log(this.paciente)
    this.turnos.forEach(turno => {
      turno.agregar =1;
      if(this.profesional != undefined){
        if (!turno.profesional.toLocaleLowerCase().includes(this.profesional.toLocaleLowerCase()))
        {
        turno.agregar = 0;
      }
  }
  if(this.paciente != undefined){
    if (!turno.paciente.toLocaleLowerCase().includes(this.paciente.toLocaleLowerCase()))
    {
    turno.agregar = 0;
  }
}

if(this.especialidad != undefined){
  if (!turno.especialidad.toLocaleLowerCase().includes(this.especialidad.toLocaleLowerCase()))
  {
  turno.agregar = 0;
  }                    
}

if(this.temperatura != undefined){
  if (!turno.temperatura.toLocaleLowerCase().includes(this.temperatura.toLocaleLowerCase()))
  {
  turno.agregar = 0;
  }                    
}

if(this.fecha != undefined){
  if (!turno.fecha.toDate().toJSON().toLocaleLowerCase().includes(this.fecha.toLocaleLowerCase()))
  {
  turno.agregar = 0;
  }                    
}

if(this.campo != undefined){
  let contiene = 0;
  turno.datosParticulares.forEach(datoParticular => {
    console.log(datoParticular);
    if(datoParticular.dato.includes(this.campo))
    contiene = 1;
  });
  if (contiene  == 0)
  turno.agregar = 0;
}

})

this.ArmarListaFiltrada();

    console.log(this.turnos);
  }


  ArmarListaFiltrada(){
    this.turnos.forEach(turno => {
      if(turno.agregar == 1){
        this.turnosFiltrados.push(turno);
      }
    })
  }



  AbrirModal(turno){
this.abierto = true;
this.turnoSelected = turno;
console.log("hola");
console.log(this.turnoSelected);
this.turnoService.ObtenerTextoReseña(turno.idTurno).subscribe(turnos=>{
  turnos.forEach(turno => {
      this.turnoSelected.resena = turno;              
  });     
  })

  this.turnoService.ObtenerEncuestaPaciente(turno.idTurno).subscribe(turnos=>{
    turnos.forEach(encuesta => {
      console.log(encuesta);
        this.turnoSelected.encuesta = encuesta;  

    });     
    })
}




}
