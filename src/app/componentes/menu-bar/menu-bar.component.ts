import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth-service.service';
import {UsuariosServiceService} from '../../servicios/usuarios-service.service';
import {Usuario} from '../../clases/usuario'
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  logeado:boolean = false;

  constructor(private authService: AuthService, private usuariosService: UsuariosServiceService) { }
users;
perfil;
  ngOnInit(): void {
    this.getCurrentUser();
    var getUser = window.localStorage.getItem("User");

    this.usuariosService.ObtenerUsuario<Usuario>("email",getUser).subscribe(users=>{
            this.users=users;
            users.forEach(user => {
                this.perfil = user.perfil;              
            });        
  })
}

  Logout() 
  {
    this.authService.LogoutUsuario();
  }


  getCurrentUser() 
  {
    this.authService.isAuth().subscribe(auth => {
      if (auth)
      {
        this.logeado = true;
      } 
      else 
      {
        this.logeado = false;
      }
    });
  }

}
