import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { ListaComponent } from './componentes/admin/lista/lista.component';
import { AltaComponent } from './componentes/admin/alta/alta.component';
import { PacienteListadoComponent } from './componentes/paciente/paciente-listado/paciente-listado.component';
import { ProfesionalComponent } from './componentes/profesional/profesional.component';
import { PacienteAltaComponent } from './componentes/paciente/paciente-alta/paciente-alta.component';
import { ProfesionalAltaComponent } from './componentes/profesional/profesional-alta/profesional-alta.component';
import { ProfesionalListadoComponent } from './componentes/profesional/profesional-listado/profesional-listado.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { UploadFileComponent } from './componentes/upload-file/upload-file.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProfesionalesPendientesComponent } from './componentes/profesionales-pendientes/profesionales-pendientes.component';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { AltaEspecialidadComponent } from './componentes/alta-especialidad/alta-especialidad.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { ConfigProfesionalComponent } from './componentes/config-profesional/config-profesional.component';
import {MatSelectModule} from '@angular/material/select';
import { TurnoSolicitadoComponent } from './turno-solicitado/turno-solicitado.component';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';
import { AtencionComponent } from './componentes/atencion/atencion.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { EncuestaUsuarioComponent } from './componentes/encuesta-usuario/encuesta-usuario.component';
import { LoginsComponent } from './componentes/reportes/logins/logins.component';
import { EspecialidadOperacionesComponent } from './componentes/reportes/especialidad-operaciones/especialidad-operaciones.component';
import { ChartModule } from 'angular-highcharts';
import { TurnoporMedicoComponent } from './componentes/reportes/turnopor-medico/turnopor-medico.component';
import { DiasporMedicoComponent } from './componentes/reportes/diaspor-medico/diaspor-medico.component';
import { DiaporTurnoComponent } from './componentes/reportes/diapor-turno/diapor-turno.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdminComponent,
    PacienteComponent,
    ListaComponent,
    AltaComponent,
    PacienteListadoComponent,
    ProfesionalComponent,
    PacienteAltaComponent,
    ProfesionalAltaComponent,
    ProfesionalListadoComponent,
    HomeComponent,
    MenuBarComponent,
    UploadFileComponent,
    ProfesionalesPendientesComponent,
    SacarTurnoComponent,
    AltaEspecialidadComponent,
    PerfilUsuarioComponent,
    ConfigProfesionalComponent,
    TurnoSolicitadoComponent,
    ListaTurnosComponent,
    AtencionComponent,
    PruebaComponent,
    EncuestaComponent,
    EncuestaUsuarioComponent,
    LoginsComponent,
    EspecialidadOperacionesComponent,
    TurnoporMedicoComponent,
    DiasporMedicoComponent,
    DiaporTurnoComponent,
    BusquedaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule,
    ChartModule,
    AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, BrowserAnimationsModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

