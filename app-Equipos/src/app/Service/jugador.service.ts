import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
api = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }
  CreateJugador(body:any){
    return this.http.post(`${this.api}/jugadores/`,body);
  }
  AllJugador(){
    return this.http.get(`${this.api}/jugadores/`);
  }
  OneJugador(id:any){
    return this.http.get(`${this.api}/jugadores/${id}`);
  }
  UpdateJugador(id:any,body:any){
    return this.http.put(`${this.api}/jugadores/${id}`,body);
  }
  DeleteJugador(id:any){
    return this.http.delete(`${this.api}/jugadores/${id}`);
  }
}
