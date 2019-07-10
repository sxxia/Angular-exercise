import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  public stockNameChild: string;

  @Input()
  public purchasedAmountChild: number;

  constructor() { }

  ngOnInit() {
  }

}
