import { Injectable } from '@angular/core';
import { MyFirstModule } from '../my-first-module/my-first.module';

@Injectable({
  providedIn: MyFirstModule
})
export class ServiceModuleTestService {
  textFromServiceTest: string = 'Text From Service Working'
}
