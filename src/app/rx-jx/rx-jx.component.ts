import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-rx-jx',
  templateUrl: './rx-jx.component.html',
  styleUrls: ['./rx-jx.component.scss']
})
export class RxJXComponent implements OnInit {
 compteur$!: Observable<String>;
 compteur1$!: Observable<number>;
 disable = 1;
  constructor() { }

  ngOnInit(): void {
    // this.compteur$=interval(1000)
    // console.log(interval(1000).subscribe(value => {
    //   if (value % 2 === 0) {
    //     console.log(value,"paire");  
    //   }else {
    //     console.log(value,"impaire");
        
    //   }
    // }));

    this.compteur$ = interval(1000).pipe(
      take(3),
      filter(value => value >0),
      map(value => 
     `${value}`
 
    ),
    tap(moy => this.resultat(moy+''))
    )
    this.compteur1$ = interval(1000).pipe(
      map(value => value === 5? 
        this.disable = 0:
        value
        )  
    )
      }
      resultat(text:String){
        
        console.log("log: ",text);
        
      }
 
}
