import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from '../../components/my-first-component/my-first.component';

export const my_routes: Routes = [
  {
    path: '',
    component: MyFirstComponent
  }
];



@NgModule({
  declarations: [
    MyFirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(my_routes)
  ],
  exports: [
    RouterModule,
    MyFirstComponent
  ]
})
export class MyFirstModule { }
