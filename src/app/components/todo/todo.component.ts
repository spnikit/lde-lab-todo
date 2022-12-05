import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel, TodoStatus} from "../../model/todo.model";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'lde-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  @Input() todo!: TodoModel;
  @Output() changeStatus = new EventEmitter<TodoModel>();
  @Output() deleteTodo = new EventEmitter<TodoModel>();

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

  handleClick(todo: TodoModel) {
    this.deleteTodo.emit(todo);
  }
}

// todo: how to implement style and classes pick correctly?
// todo: maybe rename to todoCard
// todo: change todo with 2-way data binding
