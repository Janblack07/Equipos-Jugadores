import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/Service/equipo.service';

@Component({
  selector: 'app-ver-equipo',
  templateUrl: './ver-equipo.component.html',
  styleUrls: ['./ver-equipo.component.css']
})
export class VerEquipoComponent {
equipos!:any;
constructor(private equipo:EquipoService,private route:Router){}
ngOnInit(): void {
  this.equipo.AllEquipo().subscribe((res:any)=>{
    console.log(res.Equipos)
     this.equipos=res.Equipos
     console.log(this.equipos)
  },(e)=>{console.log(e);})
}
onDelete(id:any):void{
  this.equipo.DeleteEquipo(id).subscribe(data =>{
    alert('Se Elimino el Equipo Correctamente')
  this.ngOnInit()
  })
}
onUpdate(id:any):void{
  console.log("navegar")
  console.log(id)
  this.route.navigate(['equipo/editar/',id]);
}
}
