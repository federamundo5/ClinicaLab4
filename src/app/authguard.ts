import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';
import {Usuario} from '../app/clases/usuario'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private usuariosService: UsuariosServiceService, private router:Router ){
    this.getUser = window.localStorage.getItem("User");
  
    this.usuariosService.ObtenerUsuario<Usuario>("email",this.getUser).subscribe(users=>{
      users.forEach(user => {
          this.perfil = user.perfil;    
      });        
     });

  }
  perfil;
  getUser;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
          {
            if(this.perfil == "Profesional")
              return true;
              else
              return false;
       }





}
  

