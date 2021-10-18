import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'icon-demo',
    loadChildren: () => import('./icon-demo/icon-demo.module')
      .then(esm => esm.IconDemoModule)
  },
  {
    path: 'mf-passenger',
    loadChildren: () => import('passenger/module')
      .then(esm => esm.PassengerModule)
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
