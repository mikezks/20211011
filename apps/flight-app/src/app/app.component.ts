import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('counter', {read: ElementRef}) counter: ElementRef | undefined;

  constructor(private zone: NgZone) {}

  cdCountUpdater() {
    this.zone.runOutsideAngular(() => {
      (this.counter as ElementRef) && (
        (this.counter as ElementRef).nativeElement.textContent =
          ++(this.counter as ElementRef).nativeElement.textContent
      );
    });
  }
}
