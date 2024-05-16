import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  array: string[] = ['A', 'B', 'C']
  text: string = "Hello World";
  textTwo: string = "Hello World";

  showAlert(): void {
    alert("Event Binding working");
  }

}
