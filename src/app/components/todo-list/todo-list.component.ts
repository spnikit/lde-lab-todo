import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../model/Todo";

@Component({
  selector: 'lde-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private todoService: TodoService) {
  }

  get todos(){
    return this.todoService.todos;
  }

  todoTrackBy(index: number, todo: Todo){
    return todo.id;
  }

}
