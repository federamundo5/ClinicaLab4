import { Component, OnInit } from '@angular/core';
import { TurnoServiceService } from 'src/app/servicios/turno-service.service';
import { Router } from '@angular/router';
import {Turno} from '../../../clases/turno'
import {chart} from '../../../clases/chart'
import { Chart } from 'angular-highcharts';
import { FileServiceService } from 'src/app/servicios/file-service.service';

@Component({
  selector: 'app-turnopor-medico',
  templateUrl: './turnopor-medico.component.html',
  styleUrls: ['./turnopor-medico.component.css']
})
export class TurnoporMedicoComponent implements OnInit {

  constructor(private turnosService: TurnoServiceService, private router: Router, private fileService: FileServiceService) { 
    this.turnosService.obtenerTurnos<Turno>().subscribe((resp=>{
      this.armarChart(resp);
    }));
  }
  chartEsp=[];
chartArmado: Chart;

  ngOnInit(): void {
  }

  ExportarPDF(){
    var index=0;
    this.fileService.EscribirPDF("turnoPorMedico",'turnoPorMedico');
  }
  armarChart(resp){
    resp.forEach( dato=>{

      if(this.Contiene(this.chartEsp,dato.profesionalApellido)==-1){
        this.chartEsp.push(new chart(dato.profesionalApellido,[1]));
      }else{
        this.chartEsp[this.Contiene(this.chartEsp,dato.profesionalApellido)].data[0]++;
      }
    })
    this.configuracionChart();
  }


  configuracionChart(){
    this.chartArmado = new Chart({
      colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
             '#FF9655', '#FFF263', '#6AF9C4'],
      chart: {
        renderTo: 'container',
        type: 'column'
      },   
      
      title: {
        text: 'Medicos por Turno',
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
      xAxis: {  
          categories:['Medicos']

      },
      yAxis: {
          title: {
              text: 'Turnos'
          },
          tickInterval: 1
      },
      series: this.chartEsp
    });
  }

  Descargar(){
    this.fileService.exportarExcel(this.configurar(this.chartEsp),'turnosporMedico');

  }

  Ver()
  {
    this.configuracionChart();
  }

  configurar(lista){
    return lista.map(dato=>{
       return {name:dato.name,data:dato.data[0]}
       
     })
   }


  Contiene(lista,dato){
    console.log(lista);
    console.log(dato);
    let indice=-1;
    for (let index = 0; index < lista.length; index++) {
      if(lista[index].name == dato)
      {
        indice=index;
      }
    }
    return indice;
  }
}
