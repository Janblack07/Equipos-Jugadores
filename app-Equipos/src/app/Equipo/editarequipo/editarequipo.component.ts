import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from 'src/app/Service/equipo.service';

@Component({
  selector: 'app-editarequipo',
  templateUrl: './editarequipo.component.html',
  styleUrls: ['./editarequipo.component.css']
})
export class EditarequipoComponent {
  id:any;
  data:any;
  constructor(private router:Router,private route: ActivatedRoute,private equipo:EquipoService){}
  equipoForm= new FormGroup({
    NombreE: new FormControl(''),
    NombreDT: new FormControl(''),
  })
  ngOnInit(){

    this.id = this.route.snapshot.params['id'];


     this.equipo.OneEquipo(this.id).subscribe((data:any)=>{
     this.data=data.Equipos;
     this.equipoForm.setValue({
       "NombreE": this.data.NombreE,
       "NombreDT":this.data.NombreDT
     })
   },(e)=>{console.log(e);});

 }

 onUpdate(data:any){
   console.log(data);
    this.equipo.UpdateEquipo(this.id,data).subscribe((data =>{
     alert('Se actualizo conrrectamente el equipo.');
     this.router.navigate(['/equipo/ver']);
   }))
 }
}
