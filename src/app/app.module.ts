import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {NewTodoComponent} from './components/new-todo/new-todo.component';
import {FormsModule} from "@angular/forms";
import {SearchTodoComponent} from './components/search-todo/search-todo.component';
import {MaterialModule} from "./material/material.module";
import { AuthComponent } from './components/auth/auth.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    SearchTodoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
