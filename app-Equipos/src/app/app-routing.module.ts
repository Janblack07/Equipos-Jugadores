import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEquipoComponent } from './Equipo/crear-equipo/crear-equipo.component';
import { EditarequipoComponent } from './Equipo/editarequipo/editarequipo.component';
import { EquipoComponent } from './Equipo/equipo/equipo.component';
import { VerEquipoComponent } from './Equipo/ver-equipo/ver-equipo.component';
import { HomeComponent } from './home/home.component';
import { CrearjugadorComponent } from './Jugador/crearjugador/crearjugador.component';
import { EditarjugadorComponent } from './Jugador/editarjugador/editarjugador.component';
import { JugadorComponent } from './Jugador/jugador/jugador.component';
import { VerjugadorComponent } from './Jugador/verjugador/verjugador.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'equipo',component:EquipoComponent,children:[
    {path:'crear',component:CrearEquipoComponent},
    {path:'ver',component:VerEquipoComponent},
    {path:'editar/:id',component:EditarequipoComponent}
  ]},
  {path:'jugador',component:JugadorComponent,children:[
    {path:'crear',component:CrearjugadorComponent},
    {path:'ver',component:VerjugadorComponent},
    {path:'editar/:id',component:EditarjugadorComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
