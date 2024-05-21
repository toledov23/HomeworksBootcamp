import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { ServiceModuleTestService } from '../services/service-module-test.service';
import { InsideModuleComponent } from '../components/inside-module/inside-module.component';

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
    InsideModuleComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    MyFirstComponentComponent,
    InsideModuleComponent
  ],
  providers: [
    ServiceModuleTestService
  ]
})
export class MyFirstModuleModule { }
