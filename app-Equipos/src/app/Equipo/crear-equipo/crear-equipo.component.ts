import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EquipoService } from 'src/app/Service/equipo.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent  {
  constructor(private equipo:EquipoService){}
  equipoForm= new FormGroup({
    NombreE: new FormControl(''),
    NombreDT: new FormControl(''),
  })

  registroEquipo(body:any): void{
    this.equipo.CreateEquipo(body).subscribe((data:any)=>{
      console.log(data);
      alert('Se creo con exito el equipo.');
      this.equipoForm.reset();
    },(e:any)=>{console.log(e);});
  }
}
