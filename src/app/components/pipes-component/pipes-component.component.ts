import { Component } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipes-component',
  standalone: true,
  imports: [CapitalizePipe, CurrencyPipe],
  templateUrl: './pipes-component.component.html',
  styleUrl: './pipes-component.component.scss'
})
export class PipesComponentComponent {
  numValue: number = 185.33;
  stringValue: string = 'Capitalized text'

}
