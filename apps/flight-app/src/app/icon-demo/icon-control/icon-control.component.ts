import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icon-control',
  templateUrl: './icon-control.component.html',
  styleUrls: ['./icon-control.component.css']
})
export class IconControlComponent {
  @Input() iconText: '' | undefined;
  @Input() iconContent: '' | undefined;

  @HostBinding('class.icon-empty') get iconEmptyStyle() {
    return this.iconText === undefined && this.iconContent === undefined;
  }
  @HostBinding('class.icon-text') get iconTextStyle() {
    return this.iconText !== undefined && this.iconContent === undefined;
  }
  @HostBinding('class.icon-content') get iconContentStyle() {
    return this.iconContent !== undefined && this.iconText === undefined;
  }
}
