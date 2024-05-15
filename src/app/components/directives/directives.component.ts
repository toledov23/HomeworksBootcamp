import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  activeClass: boolean = false;

  toggleActiveClass() {
    this.activeClass = !this.activeClass;
  }

}
