import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  activeClass: boolean = false;
  activeStyle: boolean = false;

  toggleActiveClass() {
    this.activeClass = !this.activeClass;
  }

  toggleActiveStyle() {
    this.activeStyle = !this.activeStyle;
  }

}
