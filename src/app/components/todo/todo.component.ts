import {Component, Input} from '@angular/core';
import {Todo, TodoStatus} from "../../model/Todo";

@Component({
  selector: 'lde-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo!: Todo;

  private backgroundClasses = {
    simple: 'simple',
    important: 'important',
    completed: 'completed'
  }

  getClasses(status: TodoStatus) {

    return this.backgroundClasses[status];
  }

}

// todo: how to implement style and classes pick correctly?
// todo: maybe rename to todoCard
