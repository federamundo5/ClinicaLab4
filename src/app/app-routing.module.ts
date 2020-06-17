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
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { ConfigProfesionalComponent } from './componentes/config-profesional/config-profesional.component'
import { TurnoSolicitadoComponent } from './turno-solicitado/turno-solicitado.component';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';
import { AtencionComponent } from './componentes/atencion/atencion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from '../app/authguard'
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { EncuestaUsuarioComponent } from './componentes/encuesta-usuario/encuesta-usuario.component';
import { LoginsComponent } from './componentes/reportes/logins/logins.component';
import { EspecialidadOperacionesComponent } from './componentes/reportes/especialidad-operaciones/especialidad-operaciones.component';
import { TurnoporMedicoComponent } from './componentes/reportes/turnopor-medico/turnopor-medico.component';
import { DiasporMedicoComponent } from './componentes/reportes/diaspor-medico/diaspor-medico.component';
import { DiaporTurnoComponent } from './componentes/reportes/diapor-turno/diapor-turno.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'Home' , component: HomeComponent, data: {animation: 'Home'}},
  {path: 'Admin' , component: AdminComponent},
  {path: 'Admin/Alta' , component: AltaComponent},
  {path: 'Admin/Listado' , component: ListaComponent},
  {path: 'Profesional' , component: ProfesionalAltaComponent},
  {path: 'Profesional/Listado' , component: ProfesionalListadoComponent},
  {path: 'Profesional/Alta' , component: ProfesionalAltaComponent},
  {path: 'Profesional/Configuracion' ,canActivate:[AuthGuard],  component: ConfigProfesionalComponent},
  {path: 'Paciente' , component: PacienteComponent},
  {path: 'Paciente/Listado' , component: PacienteListadoComponent},
  {path: 'Paciente/Alta' , component: PacienteAltaComponent},
  {path: 'Admin/Pendientes' , component: ProfesionalesPendientesComponent},
  {path: 'Especialidad/Alta' , canActivate:[AuthGuard], component: AltaEspecialidadComponent},
  {path: 'Login' , component: LoginComponent, data: {animation: 'Login'}},
  {path: 'Turno' , component: SacarTurnoComponent, data: {animation: 'Turno'}},
  {path: 'Perfil' , component: PerfilUsuarioComponent, data: {animation: 'Perfil'}},
  {path: 'TurnoSolicitado' , component: TurnoSolicitadoComponent},
  {path: 'Atender' , canActivate:[AuthGuard], component: AtencionComponent},
  {path: 'Encuesta' , canActivate:[AuthGuard], component: EncuestaComponent},
  {path: 'EncuestaUsuario' , component: EncuestaUsuarioComponent},
  {path: 'listaTurnos' , component: ListaTurnosComponent},
  {path: 'Reporte/Ingresos' , component: LoginsComponent},
  {path: 'Reporte/EspecialidadesOperaciones' , component: EspecialidadOperacionesComponent},
  {path: 'Reporte/TurnosPorMedico' , component: TurnoporMedicoComponent},
  {path: 'Reporte/DiasPorMedico' , component: DiasporMedicoComponent},
  {path: 'Busqueda' , component: BusquedaComponent},
  {path: 'Reporte/TurnosPorDia' , component: DiaporTurnoComponent},
  {path: 'Registro' , component: RegistroComponent},
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
