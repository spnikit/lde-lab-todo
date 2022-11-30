import {Injectable} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

import {Todo} from "../model/Todo";

@Injectable()
export class TodoService {

  private todoList: Todo[] = [];

  constructor() {
    this.todoList = [
      new Todo('1', 'task-1'),
      new Todo('2', 'task-2', 'important'),
      new Todo('3', 'task-3', 'completed'),
    ]
  }

  get todos(): Todo[] {
    return this.todoList;
  }

  addTodo(task: string) {
    const todo = new Todo(
      uuidv4(),
      task
    )
    this.todoList.push(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoList = this.todoList.filter(elem => elem.id !== todo.id);
  }

  changeStatus(todo: Todo) {
    this.todoList.forEach(elem => {
      if (elem.id === todo.id) {
        elem.status = todo.status;
      }
    })
  }
}




