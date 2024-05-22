import { Component } from '@angular/core';
import { Z1Component } from '../z1/z1.component';

@Component({
  selector: 'app-a1',
  standalone: true,
  imports: [Z1Component],
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.scss'
})
export class A1Component {

}
