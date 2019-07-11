import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('Project content initial completed in child component');
  }

  ngAfterContentChecked(): void {
    console.log('Project content checked completed in child component');
  }

  ngAfterViewInit(): void {
    console.log('View initial completed in child component');
  }

}
