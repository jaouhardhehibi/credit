import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditServiceService } from 'src/app/credit-service.service';
import { Credit } from '../credit';
import {MatDialog} from '@angular/material/dialog'
import { AjoutComponent } from '../ajout/ajout.component';
import { HistoriqueregleComponent } from 'src/app/reglement/historiqueregle/historiqueregle.component';
import { ReglerComponent } from '../regler/regler.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
credit! :any
searchText! : String

  constructor(private matDialog: MatDialog,private serviceAPI : CreditServiceService, private router:Router) { }

  ngOnInit(): void {
   // this.getAll()
   this.getAll()
  }
  openDialog(){
    this.matDialog.open(AjoutComponent,{
      height: '550px',
      width: '500px',
    }).afterClosed()
    .subscribe(()=>{this.getAll()})

  }
  openDialogHistorique(id:number){
    this.matDialog.open(HistoriqueregleComponent,{
      width: '500px',
      height: '600px',
      data: id,
      
    }).afterClosed()
    .subscribe(()=>{this.getAll})
    console.log("id",id);
    
  }
  openDialogEdit(id:number){
    this.matDialog.open(ReglerComponent, {
      width:'500px',
      height: '500px',
      data : id,
    }).afterClosed()
    .subscribe(()=> {this.getAll()})
  }
  // this.serviceAPI.getAllCredit().subscribe((res)=>{
  //   this.credit = res
  //   console.log(this.credit);
    
  // })
 getAll() {
  this.serviceAPI.getAllCredit().subscribe((res)=>{
    this.credit = res
  }
  )}
  
  


  deleteCr(id:number){
    this.serviceAPI.delteCredit(id)
    alert('credit supprimé')
    this.getAll()
   // this.router.navigate(['/','/listCredit'])
  }

}
