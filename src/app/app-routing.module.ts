import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component'
import { AdminComponent } from './componentes/admin/admin.component';
import { AltaComponent } from './componentes/admin/alta/alta.component';
import { ListaComponent } from './componentes/admin/lista/lista.component';
import { ProfesionalAltaComponent } from './componentes/profesional/profesional-alta/profesional-alta.component';
import { ProfesionalListadoComponent } from './componentes/profesional/profesional-listado/profesional-listado.component';
import { PacienteAltaComponent } from './componentes/paciente/paciente-alta/paciente-alta.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { PacienteListadoComponent } from './componentes/paciente/paciente-listado/paciente-listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProfesionalesPendientesComponent } from './componentes/profesionales-pendientes/profesionales-pendientes.component';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { AltaEspecialidadComponent } from './componentes/alta-especialidad/alta-especialidad.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'Home' , component: HomeComponent},
  {path: 'Admin' , component: AdminComponent},
  {path: 'Admin/Alta' , component: AltaComponent},
  {path: 'Admin/Listado' , component: ListaComponent},
  {path: 'Profesional' , component: ProfesionalAltaComponent},
  {path: 'Profesional/Listado' , component: ProfesionalListadoComponent},
  {path: 'Profesional/Alta' , component: ProfesionalAltaComponent},
  {path: 'Paciente' , component: PacienteComponent},
  {path: 'Paciente/Listado' , component: PacienteListadoComponent},
  {path: 'Paciente/Alta' , component: PacienteAltaComponent},
  {path: 'Admin/Pendientes' , component: ProfesionalesPendientesComponent},
  {path: 'Especialidad/Alta' , component: AltaEspecialidadComponent},
  {path: 'Login' , component: LoginComponent},
  {path: 'Turno' , component: SacarTurnoComponent},
  {path: 'Registro' , component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
