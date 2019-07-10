import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit, OnDestroy {
  private numberSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.numberSubscription = of(1,2,3,4,5,6).pipe(
      filter( e => e%2 === 0),
      map(e => e*e )
    ).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("Observable completed!")
    );
  }

  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
  }
}
