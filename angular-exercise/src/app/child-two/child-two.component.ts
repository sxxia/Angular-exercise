import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  public childTwoMessage = 'This is the message from component child two!'

  @Output()
  public messageEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEmitter.emit(this.childTwoMessage);
  }
}
