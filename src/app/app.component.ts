import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstModule } from './my-first-module/my-first.module';
import { RootComponent } from './components/root-component/root.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstModule, RootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bootcamp';
}
