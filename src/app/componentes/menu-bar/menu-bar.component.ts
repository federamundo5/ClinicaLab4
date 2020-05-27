import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth-service.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  logeado:boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser();
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
