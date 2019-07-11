import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit,
                                           OnChanges,
                                           DoCheck,
                                           AfterContentInit,
                                           AfterContentChecked,
                                           AfterViewInit,
                                           AfterViewChecked,
                                           OnDestroy {
  
  @Input()
  public name: string;

  public index = 1;

  logIt(message: string) {
    console.log(`#${this.index++} ${message}`);
  }
  constructor() {
    this.logIt("The value of name property in constructor is: " +name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    let name = changes['name'].currentValue;
    this.logIt("The value of name property in ngOnChanges is: " +name);
  }

  ngDoCheck() {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('ngOnDestroy');
  }
}
