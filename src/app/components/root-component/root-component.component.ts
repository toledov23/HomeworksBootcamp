import { Component } from '@angular/core';
import { ServiceTestService } from '../../services/service-test.service';

@Component({
  selector: 'app-root-component',
  standalone: true,
  imports: [],
  templateUrl: './root-component.component.html',
  styleUrl: './root-component.component.scss'
})
export class RootComponentComponent {
  constructor(public myService: ServiceTestService) { }

}
