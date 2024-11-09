import { Component } from '@angular/core';
import { Todo } from '../../../todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, CommonModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos:Todo[] = [
    {
      sno:1,
      title:"this is title 1",
      desc:"Description",
      isactive:true
    },
    {
      sno:2,
      title:"this is title 2",
      desc:"Description",
      isactive:true
    },
    {
      sno:3,
      title:"this is title 3",
      desc:"Description",
      isactive:true
    },
    {
      sno:4,
      title:"this is title 4",
      desc:"Description",
      isactive:true
    }
  ]
  
  deletetodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }
}

