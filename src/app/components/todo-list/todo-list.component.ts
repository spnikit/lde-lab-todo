import {Component} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {ITodoFilter, Todo} from "../../model/Todo";

@Component({
  selector: 'lde-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListComponent {

  todoFilter: ITodoFilter = {
    search: '',
    status: ''
  };

  constructor(private todoService: TodoService) {
  }


  get todos() {
    return this.filterTodoList(this.todoFilter, this.todoService.todos);
  }

  onSetFilter(filterValue: ITodoFilter) {
    this.todoFilter.search = filterValue.search;
    this.todoFilter.status = filterValue.status;
  }

  filterTodoList(filter: ITodoFilter, list: Todo[]){
    if (filter.search && !filter.status) {
      return list.filter(
        todo => todo.task.toLowerCase().includes(filter.search.toLowerCase())
      )
    }
    if (!filter.search && filter.status) {
      return list.filter(
        todo => todo.status === filter.status
      )
    }
    if (filter.search && filter.status) {
      return list.filter(
        todo =>
          todo.status === filter.status &&
          todo.task.toLowerCase().includes(filter.search.toLowerCase())
      )
    }
    return list;
  }

  todoTrackBy(index: number, todo: Todo) {
    return todo.id;
  }

  onCreate(task: string) {
    this.todoService.addTodo(task);
  }

  onUpdate(todo: Todo) {
    this.todoService.changeStatus(todo);
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }


}

//todo: отобразить уведомление, когда лист пустой
