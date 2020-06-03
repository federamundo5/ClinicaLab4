import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';
import {Usuario} from '../../clases/usuario'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : Usuario[];    

  constructor(private UsuariosService: UsuariosServiceService) { }

  ngOnInit(): void {

    
    var getUser = window.localStorage.getItem("User");

    this.UsuariosService.ObtenerUsuario<Usuario>("email",getUser).subscribe(users=>{
            this.users=users;
            console.log(this.users);
          })      
  }

}
