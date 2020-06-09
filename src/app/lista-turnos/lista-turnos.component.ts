import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../servicios/especialidades.service';
import { UsuariosServiceService } from '../servicios/usuarios-service.service';
import { TurnoServiceService } from '../servicios/turno-service.service';
import { Turno } from '../clases/turno';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})
export class ListaTurnosComponent implements OnInit {

  constructor(private especialidadesService: EspecialidadesService, 
    private usuariosService: UsuariosServiceService, private turnoService: TurnoServiceService, private router: Router) { }
   
    turnos:Turno[]=[];
    usuario;
    emailUsuarioLogueado;
    turnoSeleccionado: Turno;
    perfil;
    actualizando = false;

  ngOnInit(): void {
               
    this.emailUsuarioLogueado = window.localStorage.getItem("User");
         this.ObtenerDatos();
  }

  ObtenerDatos(){
     this.turnos.length = 0;
    this.usuariosService.ObtenerUsuario<Usuario>("email",this.emailUsuarioLogueado).subscribe(users=>{
      users.forEach(user => {
        this.usuario = user;
       this.perfil = user.perfil;
        
        if(user.perfil == "Profesional")
        {
          this.turnoService.obtenerTurnosProfesional<Turno>(this.emailUsuarioLogueado).subscribe(turnos=>{
            turnos.forEach(turno => {
              if(turno.estado == "Pendiente Aprobacion Profesional" || turno.estado == "Aprobado")
              this.turnos.push(turno);
            })
          })
          this.actualizando = false;
        }
        if(user.perfil == "Paciente")
        {
          this.turnoService.obtenerTurnosPaciente<Turno>(this.emailUsuarioLogueado).subscribe(turnos=>{
            turnos.forEach(turno => {
              this.turnos.push(turno);
            })
          })
          this.actualizando = false;
        }            
      })
    })
  }


  CancelarTurno(turno)
  {
      turno.estado = "Cancelado";
this.actualizando = true;
    this.turnoService.actualizaTurno(turno.identificador, turno).then(() => {
      console.log('Documento editado exitósamente');
      this.ObtenerDatos();
    }, (error) => {
      console.log(error);
    }); 
  }

  Aprobar(turno)
  {
      turno.estado = "Aprobado";
this.actualizando = true;
    this.turnoService.actualizaTurno(turno.identificador, turno).then(() => {
      console.log('Documento editado exitósamente');
      this.ObtenerDatos();
    }, (error) => {
      console.log(error);
    }); 
  }

  Atender(turno){
    this.router.navigate(['/Atender'], { state: { turno: turno } });

  }
}
