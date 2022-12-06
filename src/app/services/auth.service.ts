import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {EnvironmentService} from "./environment.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) {
  }

  login(email: string, password: string): Observable<boolean> {
    const urlOrigin = this.environment.getValue("apiUrl");
    const path = "/auth/login";

    return this.http.post<{ token: string, message?: string }>(`${urlOrigin}${path}`, {
      email,
      password,
      fio: "fio"
    }).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem("lde-todo_token", response.token);
          return true;
        } else {
          return false;
        }
      })
    )
  }

  logout() {
    localStorage.removeItem("lde-todo_token");
  }

  get isAuthenticated(): boolean {
    return Boolean(localStorage.getItem("lde-todo_token"));
  }
}
