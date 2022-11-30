import {Component, EventEmitter, Output} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'lde-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {
  @Output() newTodo = new EventEmitter<string>();

  handleClick(task: NgModel) {
    if (task.value) {
      this.newTodo.emit(task.value);
      task.reset();
    }
  }
}
