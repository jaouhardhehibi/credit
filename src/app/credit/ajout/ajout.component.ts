import { Component, OnInit } from '@angular/core';
import { CreditServiceService } from 'src/app/credit-service.service';
import { Credit } from '../credit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
   currentDate = Date.now();  
credit = new Credit('',0,1)

  constructor(private serviceAPI : CreditServiceService, private router:Router) { }

  ngOnInit(): void {

  }
save(){
 this.serviceAPI.AjoutCredit(this.credit)
  alert("ajout avec success")
 this.router.navigate(['/','listCredit'])
}
redirect(){
  this.router.navigate(['/','listCredit'])
}
}
