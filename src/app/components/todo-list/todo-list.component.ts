import {Component} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../model/Todo";

@Component({
  selector: 'lde-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent {


  taskFilter = {
    search: '',
    status: ''
  };

  constructor(private todoService: TodoService) {
  }


  get todos() {

    if (this.taskFilter.search && !this.taskFilter.status) {
      return this.todoService.todos.filter(
        todo => todo.task.toLowerCase().includes(this.taskFilter.search.toLowerCase())
      )
    }
    if (!this.taskFilter.search && this.taskFilter.status) {
      return this.todoService.todos.filter(
        todo => todo.status === this.taskFilter.status
      )
    }
    if (this.taskFilter.search && this.taskFilter.status) {
      return this.todoService.todos.filter(
        todo =>
          todo.status === this.taskFilter.status &&
          todo.task.toLowerCase().includes(this.taskFilter.search.toLowerCase())
      )
    }
    return this.todoService.todos;

  }

  setFilter(filterValue: { search: string, status: string }) {
    this.taskFilter.search = filterValue.search;
    this.taskFilter.status = filterValue.status;
  }

  todoTrackBy(index: number, todo: Todo) {
    return todo.id;
  }

  createTodo(task: string) {
    this.todoService.addTodo(task);
  }

  updateTodo($event: Todo) {
    this.todoService.changeTodoStatus($event);
  }
}

//todo: отобразить уведомление, когда лист пустой
