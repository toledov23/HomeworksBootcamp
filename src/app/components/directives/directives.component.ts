import { Component } from '@angular/core';
import { CapitalizeDirective } from '../../directives/capitalize.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CapitalizeDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

}
