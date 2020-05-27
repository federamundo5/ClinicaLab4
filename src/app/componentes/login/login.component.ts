import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../servicios/auth-service.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  email = '';
  clave= '';
  clase="progress-bar progress-bar-info progress-bar-striped ";
  Mensajes: string;


  constructor(
    private route: ActivatedRoute, private router: Router, private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  Entrar() {
    
    this.authService.LoginUsuario(this.email, this.clave).then((res)=>
    {
      this.MostarMensaje("Te logueaste exitosamente", true);
      this.router.navigate(['/Home']);

    }).catch(error =>
    { 
        console.log("Error:", error);

        switch(error.code)
        {
          case "auth/invalid-email":
            this.MostarMensaje("El email no existe");
            break;
          case "auth/wrong-password":
            this.MostarMensaje("La contraseña es incorrecta");
            break;
          case "auth/user-not-found":
            this.MostarMensaje("El usuario no existe, registrate!");
            break;
        }

    });
  }


  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
    console.info("objeto",x);
  
   }



}
