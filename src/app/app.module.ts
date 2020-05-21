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
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
