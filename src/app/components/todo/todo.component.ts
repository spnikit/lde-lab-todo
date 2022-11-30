import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo, TodoStatus} from "../../model/Todo";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'lde-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo!: Todo;
  @Output() changeStatus = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();

  backgroundClasses = {
    simple: 'simple',
    important: 'important',
    completed: 'completed'
  }

  statuses: TodoStatus[] = [
    'simple',
    'important',
    'completed'
  ]

  getClasses(status: TodoStatus) {
    return this.backgroundClasses[status];
  }


  handleChange(status: NgModel) {
    this.todo.status = status.value;
    this.changeStatus.emit(this.todo);
  }

  handleClick(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}

// todo: how to implement style and classes pick correctly?
// todo: maybe rename to todoCard
// todo: change todo with 2-way data binding
