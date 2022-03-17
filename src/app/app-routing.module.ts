import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './credit/ajout/ajout.component';
import { ListComponent } from './credit/list/list.component';
import { ReglerComponent } from './credit/regler/regler.component';
import { HistoriqueregleComponent } from './reglement/historiqueregle/historiqueregle.component';
import { LisreglementComponent } from './reglement/lisreglement/lisreglement.component';

const routes: Routes = [
  {path:'listCredit', component:ListComponent},
  {path:'ajouterCredit', component:AjoutComponent},
  {path: 'regler/:id_credit',component:ReglerComponent},
  {path:'historiqueregle/:id', component:HistoriqueregleComponent},
  {path:'listReglement', component:LisreglementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
