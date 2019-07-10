import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output()
  public purchasedAmountChild: EventEmitter<number> = new EventEmitter();

  @Input()
  public stockNameChild: string;

  @Input()
  public stockCodeChild: number;

  constructor() { }

  ngOnInit() {
  }

  buyStock() {
    this.purchasedAmountChild.emit(100);
  }

}
