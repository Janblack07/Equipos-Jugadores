import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
api = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }
CreateEquipo(body:any){
  return this.http.post(`${this.api}/equipos/`,body);
}
AllEquipo(){
  return this.http.get(`${this.api}/equipos/`);
}
OneEquipo(id:any){
  return this.http.get(`${this.api}/equipos/${id}`);
}
UpdateEquipo(id:any,body:any){
  return this.http.put(`${this.api}/equipos/${id}`,body);
}
DeleteEquipo(id:any){
  return this.http.delete(`${this.api}/equipos/${id}`);
}
}
