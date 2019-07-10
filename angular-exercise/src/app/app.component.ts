import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stockName: string;
  public stockCode: number;
  public purchasedAmount: number;

  constructor(){ }

  purchasedAmountHandle(event: any) {
    this.purchasedAmount = event;
  }
}
