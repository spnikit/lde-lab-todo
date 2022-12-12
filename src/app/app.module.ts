import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {NewTodoComponent} from './components/new-todo/new-todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchTodoComponent} from './components/search-todo/search-todo.component';
import {MaterialModule} from "./material/material.module";
import {AuthComponent} from './components/auth/auth.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TodoMainComponent} from './components/todo-main/todo-main.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ENVIRONMENT} from "./services/environment.service";
import {environment} from "../environments/environment";
import {AuthGuard} from "./guards/auth.guard";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {NavbarComponent} from './components/navbar/navbar.component';
import {MapPathToMenuNamePipe} from './pipes/map-path-to-menu-name.pipe';

export const routes: Routes = [
  {path: "main", component: TodoMainComponent},
  {path: "auth", component: AuthComponent},
  {path: "list", component: TodoListComponent, canActivate: [AuthGuard]},
  {path: "**", redirectTo: "main"}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    SearchTodoComponent,
    AuthComponent,
    TodoMainComponent,
    NavbarComponent,
    MapPathToMenuNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {provide: ENVIRONMENT, useValue: environment},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
