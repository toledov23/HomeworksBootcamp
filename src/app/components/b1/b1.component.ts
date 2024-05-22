import { Component } from '@angular/core';
import { Z1Component } from '../z1/z1.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [Z1Component],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.scss'
})
export class B1Component {

}
