import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../../services/service-test.service';

@Component({
  selector: 'app-root-component',
  standalone: true,
  imports: [],
  templateUrl: './root-component.component.html',
  styleUrl: './root-component.component.scss'
})
export class RootComponentComponent implements OnInit {
  textFromService: string = ''

  constructor(public myService: ServiceTestService) { }

  ngOnInit() {
    this.textFromService = this.myService.persistentData
  }

}
