import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../../services/service-test.service';

@Component({
  selector: 'app-inside-module',
  standalone: true,
  imports: [],
  templateUrl: './inside-module.component.html',
  styleUrl: './inside-module.component.scss'
})
export class InsideModuleComponent implements OnInit {
  textFromService: string = ''
  constructor(public myService: ServiceTestService) { }

  ngOnInit() {
    this.textFromService = this.myService.persistentData
  }
}
