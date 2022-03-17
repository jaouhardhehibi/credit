import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { reglement } from 'src/app/credit/reglement';
import { ReglementServiceService } from 'src/app/reglement-service.service';

@Component({
  selector: 'app-historiqueregle',
  templateUrl: './historiqueregle.component.html',
  styleUrls: ['./historiqueregle.component.scss']
})
export class HistoriqueregleComponent implements OnInit {
  regle!:reglement[]
//id!:number
  constructor(@Inject(MAT_DIALOG_DATA) public data:number, private serviceRegle: ReglementServiceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
//this.id = Number (this.route.snapshot.paramMap.get('id'))
this.getById()
console.log("data",this.data);

  }
getById(){
return this.serviceRegle.getReglementById(this.data).subscribe((res)=>{
  this.regle=res
  if(this.regle.length ===0){
   // alert('tu n a pas aucune reglement ')
   // this.router.navigate(['/','listCredit'])
  }
  console.log(this.regle);
  
})
}
}
