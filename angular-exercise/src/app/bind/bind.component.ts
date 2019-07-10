import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {

  public imgUrl: string = "http://placehold.it/200x200";
  public name: string;

  constructor() { 
    setInterval(() => {
      this.name = 'Tom';
    }, 3000);
  }

  ngOnInit() {
  }

  showInput(event: any) {
    this.name = event.target.value;
  }
}
