import { Component } from '@angular/core';
import { ServiceModuleTestService } from '../../services/service-module-test.service';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {
  constructor(public serviceText: ServiceModuleTestService) { }
}
