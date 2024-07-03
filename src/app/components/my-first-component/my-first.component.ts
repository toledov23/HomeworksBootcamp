import { Component } from '@angular/core';
import { ServiceModuleTestService } from '../../services/service-module-test.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss'
})
export class MyFirstComponent {
  textFromService: string = ''
  constructor(public serviceText: ServiceModuleTestService) { }

  ngOnInit() {
    this.textFromService = this.serviceText.textFromServiceTest
  }
}
