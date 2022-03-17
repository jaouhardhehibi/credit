import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reglement } from './credit/reglement';
const httpoptions= { headers : new HttpHeaders(
  {
  'Content-Type': 'application/json'
  }
)}
@Injectable({
  providedIn: 'root'
})
export class ReglementServiceService {
  
baseURL="http://localhost:3000/reglement"
  constructor(private _http:HttpClient) { }

getAllReglement(): Observable<reglement[]>{
  return this._http.get<reglement[]>(`${this.baseURL}`,httpoptions)
}
getReglementById(id:number): Observable<reglement[]>{
  return this._http.get<reglement[]>(`${this.baseURL}/${id}`,httpoptions)
}

}
