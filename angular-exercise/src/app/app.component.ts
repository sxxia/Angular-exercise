import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('childOne')
  childOne: ChildOneComponent;

  constructor(){ }

  ngOnInit(): void {
    this.childOne.childOneMethod('call child one component method from parent component');
  }

  ngAfterViewInit(): void {
    console.log("View Initial completed in parent component");
  }

  ngAfterViewChecked(): void {
    console.log("View checked completed in parent component");
  }

}
