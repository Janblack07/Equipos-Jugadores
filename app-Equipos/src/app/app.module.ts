import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CrearEquipoComponent } from './Equipo/crear-equipo/crear-equipo.component';
import { VerEquipoComponent } from './Equipo/ver-equipo/ver-equipo.component';
import { EquipoComponent } from './Equipo/equipo/equipo.component';
import { JugadorComponent } from './Jugador/jugador/jugador.component';
import { VerjugadorComponent } from './Jugador/verjugador/verjugador.component';
import { CrearjugadorComponent } from './Jugador/crearjugador/crearjugador.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditarjugadorComponent } from './Jugador/editarjugador/editarjugador.component';
import { EditarequipoComponent } from './Equipo/editarequipo/editarequipo.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CrearEquipoComponent,
    VerEquipoComponent,
    EquipoComponent,
    JugadorComponent,
    VerjugadorComponent,
    CrearjugadorComponent,
    EditarjugadorComponent,
    EditarequipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
