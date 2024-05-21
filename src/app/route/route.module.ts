import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from '../components/lazy-loading/lazy-loading.component';

const routes: Routes = [
  { path: '', component: LazyLoadingComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteModule { }
