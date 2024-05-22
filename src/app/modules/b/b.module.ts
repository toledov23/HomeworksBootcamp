import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { ZModule } from '../z/z.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BRoutingModule,
    ZModule
  ]
})
export class BModule { }
