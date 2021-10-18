import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDemoComponent } from './icon-demo.component';
import { IconControlComponent } from './icon-control/icon-control.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IconDemoComponent,
    IconControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IconDemoComponent
      }
    ])
  ]
})
export class IconDemoModule { }
