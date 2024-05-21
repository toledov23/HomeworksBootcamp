import { Injectable } from '@angular/core';
import { MyFirstModuleModule } from '../my-first-module/my-first-module.module';

@Injectable({
  providedIn: MyFirstModuleModule
})
export class ServiceModuleTestService {
  textFromServiceTest: string = 'Text From Service Working'

  constructor() { }
}
