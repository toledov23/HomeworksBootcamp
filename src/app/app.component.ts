import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { RootComponentComponent } from './components/root-component/root-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstModuleModule, RootComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bootcamp';
}
