import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import { EquipoService } from 'src/app/Service/equipo.service';
import { JugadorService } from 'src/app/Service/jugador.service';

@Component({
  selector: 'app-editarjugador',
  templateUrl: './editarjugador.component.html',
  styleUrls: ['./editarjugador.component.css']
})
export class EditarjugadorComponent {
  id:any;
  data:any;
  nomequipo:any;
  constructor(private router:Router,private route: ActivatedRoute,private equipo:EquipoService,
  private jugador:JugadorService){}
  jugadorForm= new FormGroup({
    nombreJ: new FormControl(''),
    apellidoJ: new FormControl(''),
    dorsalJ: new FormControl(''),
    posicionJ: new FormControl(''),
    equipo_id: new FormControl('')
  })
  equipos!:any;
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
     this.jugador.OneJugador(this.id).subscribe((data:any)=>{
      this.data=data.Jugadores;
      this.nomequipo=data?.equipos?.NombreE
      this.jugadorForm.setValue({
       "nombreJ": this.data.nombreJ,
       "apellidoJ":this.data.apellidoJ,
       "dorsalJ": this.data.dorsalJ,
       "posicionJ":this.data.posicionJ,
       "equipo_id": this.data.equipos.id,
     })
     console.log(data);
   },(e)=>{console.log(e);});
   this.equipo.AllEquipo().subscribe((data:any)=>{

    this.equipos = data.Equipos;

  },(e)=>{console.log(e);});

 }

 onUpdate(data:any){
   console.log(data);
    this.jugador.UpdateJugador(this.id,data).subscribe((data =>{
     alert('Se actualizo correctamente el jugador.');
     this.router.navigate(['/jugador/ver']);
   }))
 }
}
