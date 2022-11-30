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

  get todos(): readonly Todo[] {
    return this.todoList;
  }

  addTodo(task: string) {
    const todo = new Todo(
      uuidv4(),
      task
    )
    this.todoList = [...this.todoList, todo];
  }

  removeTodo(todoId: string) {
    this.todoList.filter(todo => todo.id !== todoId);
  }

  changeTodoStatus(todo: Todo) {
    this.todoList.map(elem => {
      if (elem.id === todo.id) {
        elem.status = todo.status;
      }
      return elem;
    })
  }
}

// todo: id где лучше генерить



