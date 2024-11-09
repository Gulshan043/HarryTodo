import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input() todo!:Todo;
  @Output() tododelete: EventEmitter<Todo> = new EventEmitter()

  OnDelete(todo:Todo){
    this.tododelete.emit(todo)
  }
  
}
