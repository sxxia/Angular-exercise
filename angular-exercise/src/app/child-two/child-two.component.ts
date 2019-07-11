import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log("View Initial completed in child two component");
  }

  ngAfterViewChecked(): void {
    console.log("View checked completed in child two component");
  }

  childTwoMethod(message: string) {
    console.log(message);
  }

}
