import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EquipoService } from 'src/app/Service/equipo.service';
import { JugadorService } from 'src/app/Service/jugador.service';

@Component({
  selector: 'app-crearjugador',
  templateUrl: './crearjugador.component.html',
  styleUrls: ['./crearjugador.component.css']
})
export class CrearjugadorComponent {
  constructor(private jugador:JugadorService,private equipo:EquipoService){}
  jugadorForm= new FormGroup({
    nombreJ: new FormControl(''),
    apellidoJ: new FormControl(''),
    dorsalJ: new FormControl(''),
    posicionJ: new FormControl(''),
    equipo_id: new FormControl('')
  })
  equipos!:any;
  ngOnInit(){
    this.cargar();
  }
  cargar(){
    this.equipo.AllEquipo().subscribe((data:any)=>{
      console.log(data);
      this.equipos=data.Equipos;
      console.log(this.equipos);
    },(e)=>{console.log(e);});
  }
  registrojugador(body:any): void{
    this.jugador.CreateJugador(body).subscribe((data:any)=>{
      console.log(data);
      alert('Se creo con exito el jugador.');
      this.jugadorForm.reset();
    },(e:any)=>{console.log(e);});
  }
}
