import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './credit/list/list.component';
import { AjoutComponent } from './credit/ajout/ajout.component';
import { ReglerComponent } from './credit/regler/regler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { FilerSearchPipe } from './filer-search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RxJXComponent } from './rx-jx/rx-jx.component';
import { LisreglementComponent } from './reglement/lisreglement/lisreglement.component';
import { HistoriqueregleComponent } from './reglement/historiqueregle/historiqueregle.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AjoutComponent,
    ReglerComponent,
    FilerSearchPipe,
    RxJXComponent,
    LisreglementComponent,
    HistoriqueregleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
