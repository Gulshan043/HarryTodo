import { Component } from '@angular/core';
import { Todo } from '../../../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, CommonModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos!: Todo[];
  localitem = localStorage.getItem('todos');

  constructor() {
    if (this.localitem == null) {
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localitem)
    }
  }

  deletetodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
