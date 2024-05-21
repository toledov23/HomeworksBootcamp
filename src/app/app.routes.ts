import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => import('./route/route.module').then(m => m.RouteModule)
  },
  {
    path: 'child/:id',
    component: ChildComponent,
  },
];
