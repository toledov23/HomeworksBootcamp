import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from '../components/my-first-component/my-first-component.component';

const routes: Routes = [
  {
    path: '',
    component: MyFirstComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFirstComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    MyFirstComponent
  ]
})
export class MyFirstModule { }
