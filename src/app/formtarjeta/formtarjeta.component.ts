import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from '../core/services/card.service';

@Component({
  selector: 'app-formtarjeta',
  templateUrl: './formtarjeta.component.html',
  styleUrls: ['./formtarjeta.component.scss']
})
export class FormtarjetaComponent implements OnInit, OnDestroy {

  subscription!:Subscription
  

  constructor(private cardSvc: CardService) { }

  ngOnInit(): void {
    this.subscription= this.cardSvc.getCard('491653').subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }

  ngOnDestroy(): void
{
  this.subscription.unsubscribe()
}
}
