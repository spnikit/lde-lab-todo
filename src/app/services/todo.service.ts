import {Injectable} from '@angular/core';
import {Todo, TodoStatus} from "../model/Todo";

@Injectable()
export class TodoService {

  private todoList: Todo[] = [];

  constructor() {
    this.todoList = [
      new Todo(1, 'task-1'),
      new Todo(2, 'task-2', 'important'),
      new Todo(3, 'task-3', 'completed'),
    ]
  }

  get todos(): readonly Todo[] {
    return this.todoList;
  }

  addTodo(todo: Todo) {
    this.todoList = [...this.todoList, todo];
  }

  removeTodo(todoId: number) {
    this.todoList.filter(todo => todo.id !== todoId);
  }

  changeTodoStatus(todoId: number, todoStatus: TodoStatus) {
    this.todoList.map(todo => {
      if (todo.id === todoId) {
        todo.status = todoStatus;
      }
      return todo;
    })
  }
}

// todo: id где лучше генерить



