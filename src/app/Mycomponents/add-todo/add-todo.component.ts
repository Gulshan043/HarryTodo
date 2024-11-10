import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()

  title!:string;
  desc!:string;

  onSubmit(){
    const todo = {
      sno:8,
      title : this.title,
      desc: this.desc,
      isactive:true
    }
    this.todoAdd.emit(todo)
  }

}
