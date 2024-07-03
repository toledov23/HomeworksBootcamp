import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../../services/service-test.service';

@Component({
  selector: 'app-root-component',
  standalone: true,
  imports: [],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements OnInit {
  textFromService: string = ''

  constructor(public myService: ServiceTestService) { }

  ngOnInit() {
    this.textFromService = this.myService.persistentData
  }

}
