import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditServiceService } from 'src/app/credit-service.service';
import { Credit } from '../credit';
import { reglement } from '../reglement';

@Component({
  selector: 'app-regler',
  templateUrl: './regler.component.html',
  styleUrls: ['./regler.component.scss'],
  providers: [DatePipe]
})
export class ReglerComponent implements OnInit {
 credit!:Credit
Regle = new reglement(0,0)
id!: number
resultat!: any
status=1;
result!:number
date =  new Date()
dv = formatDate(this.date,'dd-MM-yyyy', 'en-US')
  constructor(@Inject(MAT_DIALOG_DATA) public data :number, private route: ActivatedRoute, private router:Router, private serviceAPI : CreditServiceService, private datePipe : DatePipe) { }

  ngOnInit(): void {
   this.id= this.data;
  this.Regle.id_credit= this.id
  
  this.Regle.date = this.date
  
    this.serviceAPI.getAllCreditbyId(this.id).subscribe((res)=>{
      this.resultat = res
    
    })
    
   
  }
  // updateCredit() {
  //   this.serviceAPI.updateCredit
  // }
regler() {
//console.log("r",this.getOneCredit());

this.serviceAPI.reglerCredit(this.Regle)
  
if (this.Regle.montant <= this.resultat[0].montant)
{
  this.result = this.resultat[0].montant - this.Regle.montant.valueOf()
  console.log("reste",this.result);
  if (this.result === 0)
  {
    this.status = 0
  }
 this.credit= new Credit('',this.result,this.status,this.date)
  //a modifier
 // this.serviceAPI.updateCredit(this.id,this.result.valueOf(),this.status.valueOf()).subscribe((res) =>{
  //  console.log("res",res);
    
  //})
  this.serviceAPI.updateCredit2(this.id,this.credit).subscribe((res)=>{
    console.log(res);
    
  })

  this.router.navigate(['/','listCredit'])
}else {
  alert ("montant de reglement superieur au montant de credit")
}
 
}
}