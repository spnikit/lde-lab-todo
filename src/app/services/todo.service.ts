import {Injectable} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

import {TodoModel} from "../model/todo.model";

@Injectable()
export class TodoService {

  private todoList: TodoModel[] = [];

  constructor() {
    this.todoList = [
      new TodoModel('1', 'task-1'),
      new TodoModel('2', 'task-2', 'important'),
      new TodoModel('3', 'task-3', 'completed'),
    ]
  }

  get todos(): TodoModel[] {
    return this.todoList;
  }

  addTodo(task: string) {
    const todo = new TodoModel(
      uuidv4(),
      task
    )
    this.todoList.push(todo);
  }

  deleteTodo(todo: TodoModel) {
    this.todoList = this.todoList.filter(elem => elem.id !== todo.id);
  }

  changeStatus(todo: TodoModel) {
    this.todoList.forEach(elem => {
      if (elem.id === todo.id) {
        elem.status = todo.status;
      }
    })
  }
}




