import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { A1Component } from '../../components/a1/a1.component';
import { ZModule } from '../z/z.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    ZModule
  ]
})
export class AModule { }
