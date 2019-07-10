import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {

  public imgUrl: string = "http://placehold.it/200x200";

  constructor() { }

  ngOnInit() {
  }
}
