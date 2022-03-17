import { Component, OnInit } from '@angular/core';
import { reglement } from 'src/app/credit/reglement';
import { ReglementServiceService } from 'src/app/reglement-service.service';

@Component({
  selector: 'app-lisreglement',
  templateUrl: './lisreglement.component.html',
  styleUrls: ['./lisreglement.component.scss']
})
export class LisreglementComponent implements OnInit {
regle!: reglement []
  constructor(private _serviceAPI:ReglementServiceService) { }

  ngOnInit(): void {
   this.getAllRegle()
  }
getAllRegle(){
  this._serviceAPI.getAllReglement().subscribe((res)=>{
console.log(res);
return this.regle =res
  
  
})
}
}
