import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { ServiceModuleTestService } from '../services/service-module-test.service';

const routes: Routes = [
  {
    path: '',
    component: MyFirstComponentComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFirstComponentComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    MyFirstComponentComponent
  ],
  providers: [
    ServiceModuleTestService
  ]
})
export class MyFirstModuleModule { }
