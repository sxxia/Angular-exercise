import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log("View Initial completed in child one component");
  }

  ngAfterViewChecked(): void {
    console.log("View checked completed in child one component");
  }

  childOneMethod(message: string) {
    console.log(message);
  }

}
