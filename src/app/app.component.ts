import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bootcamp';
}
