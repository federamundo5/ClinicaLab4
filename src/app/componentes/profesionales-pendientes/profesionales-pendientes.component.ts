import { Component, OnInit } from '@angular/core';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';

@Component({
  selector: 'app-profesionales-pendientes',
  templateUrl: './profesionales-pendientes.component.html',
  styleUrls: ['./profesionales-pendientes.component.css']
})
export class ProfesionalesPendientesComponent implements OnInit {
  profesionales:any[]
  settings;
  constructor(private usuariosService: UsuariosServiceService) { }

  ngOnInit(): void {
    this.usuariosService.getProfesionalesNoAprobados().subscribe(resp=>{
      this.profesionales=resp;
      console.log(this.profesionales);
    })
  }


  Aprobar(id){
  
    this.usuariosService.Aprobar(id);
  }

}
