import {Component} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {ITodoFilter, TodoModel} from "../../model/todo.model";
import {combineLatest, map, Observable} from "rxjs";

@Component({
  selector: 'lde-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListComponent {


  constructor(private todoService: TodoService) {
  }


  get todos$(): Observable<TodoModel[]> {
    return combineLatest([
      this.todoService.todos$,
      this.todoService.filterActions$
    ]).pipe(
      map(([todos, filter]) => {
        return this.filterTodoList(filter, todos);
      })
    );
  }

  // get todos() {
  //   return this.filterTodoList(this.todoFilter, this.todoService.todos);
  // }

  onSetFilter(filterValue: ITodoFilter) {
    this.todoService.updateFilter(filterValue);
  }

  todoTrackBy(index: number, todo: TodoModel) {
    return todo.id;
  }

  onCreate(task: string) {
    this.todoService.addTodo(task);
  }

  onUpdate(todo: TodoModel) {
    this.todoService.changeStatus(todo);
  }

  onDelete(todo: TodoModel) {
    this.todoService.deleteTodo(todo);
  }

  filterTodoList(filter: ITodoFilter, list: TodoModel[]) {
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

}

