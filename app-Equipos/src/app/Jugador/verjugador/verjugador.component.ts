import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from 'src/app/Service/jugador.service';

@Component({
  selector: 'app-verjugador',
  templateUrl: './verjugador.component.html',
  styleUrls: ['./verjugador.component.css']
})
export class VerjugadorComponent {
  jugadores!:any
  constructor(private readonly jugadorService:JugadorService,
    private route:Router){}
  ngOnInit(): void {
    this.jugadorService.AllJugador().subscribe((res:any)=>{
      console.log(res.Jugadores)
      this.jugadores=res.Jugadores
    })
  }
  onDelete(id:any):void{
    this.jugadorService.DeleteJugador(id).subscribe(data =>{
      alert('Se Elimino el jugador con exito');
    this.ngOnInit()
    })
  }
  onUpdate(id:any):void{
    console.log("navegar")
    console.log(id)
    this.route.navigate(['jugador/editar/',id]);
  }
}
