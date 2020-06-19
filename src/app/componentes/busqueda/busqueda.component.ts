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
busqueda;
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
    console.log(this.turnosFiltrados);
    console.log(this.turnos)
    this.turnos.forEach(turno => {
      turno.agregar =1;
      if(this.busqueda != undefined){
        if (turno.profesional.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()))
        {
        turno.agregar = 0;
     }
  }


  if(this.busqueda != undefined){
    if (turno.paciente.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()))
    {
    turno.agregar = 0;
  }
}

if(this.busqueda != undefined){
  if (turno.especialidad.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()))
  {
  turno.agregar = 0;
  }                    
}

if(this.busqueda != undefined && turno.temperatura != undefined){
  if (turno.temperatura.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()))
  {
  turno.agregar = 0;
  }                    
}

if(this.busqueda != undefined){
  if (turno.fecha.toDate().toJSON().toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()))
  {
  turno.agregar = 0;
  }                    
}

if(this.busqueda != undefined && turno.datosParticulares != undefined){
  let contiene = 0;
  turno.datosParticulares.forEach(datoParticular => {
    console.log(datoParticular);
    if(datoParticular.dato.includes(this.busqueda))
    contiene = 1;
  });
  if (contiene  == 1)
  turno.agregar = 0;
}

if(turno.datos != undefined)
{
  for(let item of Object.keys(turno.datos))
  {   
    if(item.includes(this.busqueda))
turno.agregar = 0;

if (turno.datos.hasOwnProperty(item) && turno.datos[item].includes(this.busqueda)) {
  turno.agregar = 0
 }
  }
  

}

})

console.log("Armando Lista" + this.turnos);

this.ArmarListaFiltrada();

  }

   hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value;
}


  ArmarListaFiltrada(){
    
    this.turnos.forEach(turno => {
      if(turno.agregar == 0){
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
