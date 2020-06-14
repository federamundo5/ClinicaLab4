import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {Login} from '../../../clases/login'
import { FileServiceService } from 'src/app/servicios/file-service.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'fecha'];
  dataSource:MatTableDataSource<any>;
  lista:Array<any>;
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];

  constructor(private usuariosService: UsuariosServiceService, private router:Router, private fileService: FileServiceService) { }

  ngOnInit(): void {
    this.usuariosService.ObtenerLogins().subscribe((resp=>{
      console.log(resp);
      this.lista=resp;
    }));
   }

  

  ExportarExcel(){
    /*var lista:string[]=[];
    const csv:string[]=[];

    lista.push("Usuario");
    lista.push("Fecha");
    csv.push(lista.join(","));
    lista = new Array<string>();

    for (let index = 0; index < this.lista.length; index++) {
      const login = this.lista[index];
      lista.push(login.usuario);
      lista.push(login.diahora.toDate());
      csv.push(lista.join(","));
      lista = new Array<string>();
    }
    var csvFinal = csv.join("\n");
    // var csv2 = csv.join('\n');

    // console.log(csv2);

      let blob = new Blob([csvFinal], { type: 'text/csv' });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = 'reporte-loginProfesional.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);*/
      this.fileService.exportAsExcelFile([JSON.stringify({dato:this.lista})],'logins');

  }
}
