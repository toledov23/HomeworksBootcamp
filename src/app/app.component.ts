import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialDialogComponent } from './components/material/material.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bootcamp';
}
