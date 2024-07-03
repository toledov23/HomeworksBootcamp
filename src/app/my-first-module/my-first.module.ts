import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../components/my-first-component/my-first.component';
import { ServiceModuleTestService } from '../services/service-module-test.service';
import { InsideModuleComponent } from '../components/inside-module/inside-module.component';

@NgModule({
  declarations: [
    MyFirstComponent,
    InsideModuleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyFirstComponent,
    InsideModuleComponent
  ],
  providers: [
    ServiceModuleTestService
  ]
})
export class MyFirstModule { }
