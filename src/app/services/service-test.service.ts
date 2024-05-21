import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
  persistentData: string = 'I’m a variable inside a singleton.'
}
