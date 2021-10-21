import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import { timer, tap, take } from 'rxjs';
import { RxConnector } from './rx-connector';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RxConnector]
})
export class AppComponent {
  @ViewChild('counter', {read: ElementRef}) counter: ElementRef | undefined;

  constructor(
    private zone: NgZone,
    private rx: RxConnector) {

    this.rx.connect(
      timer(0, 1000).pipe(take(10)),
      {
        next: value => console.log(value)
      }
    );
    this.rx.connect(
      timer(500, 1000).pipe(
        take(10),
        tap(value => console.log(value))
      )
    );
  }

  cdCountUpdater() {
    this.zone.runOutsideAngular(() => {
      (this.counter as ElementRef) && (
        (this.counter as ElementRef).nativeElement.textContent =
          ++(this.counter as ElementRef).nativeElement.textContent
      );
    });
  }
}
