import {Injectable} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

import {ITodoFilter, TodoModel} from "../model/todo.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, from, Observable} from "rxjs";

@Injectable()
export class TodoService {

  private todoList: TodoModel[] = [];

  private filterSubject = new BehaviorSubject<ITodoFilter>({
    search: '',
    status: ''
  });

  filterActions$ = this.filterSubject.asObservable();


  constructor(private http: HttpClient) {
    this.http.get<TodoModel[]>("assets/todo-list.json")
      .subscribe(data => {
        this.todoList = data;
      })
  }

  updateFilter(filterVal: ITodoFilter) {
    this.filterSubject.next(filterVal);
  }

  get todos$(): Observable<TodoModel[]> {
    return from([this.todoList]);
  }

  // get todos(): TodoModel[] {
  //   return this.todoList;
  // }

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




