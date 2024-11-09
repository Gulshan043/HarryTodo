import { Component } from '@angular/core';
import { TodosComponent } from './Mycomponents/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HarryTodo';
}
