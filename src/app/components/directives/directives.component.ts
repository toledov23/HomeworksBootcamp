import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitchCase, NgSwitch],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  letters: string[] = ['A', 'B', 'C']
}
