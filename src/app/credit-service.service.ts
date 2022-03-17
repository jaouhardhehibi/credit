import { Injectable } from '@angular/core';
import { Credit } from './credit/credit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpoptions = { headers :new HttpHeaders 
  (
    {
      'Content-Type' : 'application/json'
    }
  )
  }
@Injectable({
  providedIn: 'root'
})
export class CreditServiceService {
credit!: Credit []
  constructor(private _http:HttpClient) {
  //   this.credit =[
  //     {id:1,type:"banque",montant:1200,date:new Date("1/1/2021"),status:1},
  //     {id:2,type:"personne",montant:520,date:new Date,status:1},
  //     {id:3,type:"societe",montant:480,date:new Date,status:1}
  //   ]
    }
    
    
    baseURL ="http://localhost:3000"

   getAllCredit(): Observable<any> {
     return this._http.get(`${this.baseURL}/list`)
   }
   getAllCreditbyId(id:Number) {
    return this._http.get(`${this.baseURL}/findOne/${id}`)
   }
   updateCredit(id:number,montant:number,status:number): Observable<Credit>{
    
    console.log(id+" "+montant+" "+status);
    
     return this._http.put<Credit>(`${this.baseURL}/updateCredit/${id}/${montant}`,status,httpoptions)
   }


   updateCredit2(id:number,data:Credit): Observable<Credit>{
    
   console.log(data);
    
     return this._http.put<Credit>(`${this.baseURL}/updateCredit/${id}`,data,httpoptions)
   }



   AjoutCredit(data: any) {
console.log("d",data);

       this._http.post(`${this.baseURL}/add`, data).subscribe();
   }
   reglerCredit(data:any){
     console.log("regle",data);
     
    this._http.post(`${this.baseURL}/addRegle`,data).subscribe()
   }
   delteCredit(id:number) {
     this._http.delete(`${this.baseURL}/deleteCredit/${id}`).subscribe()
   }
}
