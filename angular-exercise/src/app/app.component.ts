import { Component, ViewChild, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor(){ }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('Project content initial completed in parent component');
  }

  ngAfterContentChecked(): void {
    console.log('Project content checked completed in parent component');
  }

  ngAfterViewInit(): void {
    console.log('View initial completed in parent component');
  }

}
