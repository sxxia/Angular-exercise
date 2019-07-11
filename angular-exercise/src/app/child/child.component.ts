import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  public greeting: string;

  @Input()
  public user: {name: string}

  public message: string = 'Initial message!'

  public oldUserName: string;

  public changeDetected = false;

  public noChangeCount = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    if(this.user.name !== this.oldUserName) {
      this.changeDetected = true;
      console.log('Docheck: user.name from ' + this.oldUserName + 'to ' + this.user.name);
      this.oldUserName = this.user.name;
    }

    if(this.changeDetected) {
      this.noChangeCount = 0
    }else {
      this.noChangeCount += 1;
      console.log('Docheck: when user.name no change, the Docheck is still called' + this.noChangeCount)
    }

    this.changeDetected = true;
  }
}
