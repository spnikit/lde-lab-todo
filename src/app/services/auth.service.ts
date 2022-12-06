import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {EnvironmentService} from "./environment.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // create environment file
  // read article about environment file
  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) {
  }

  login(email: string, password: string): Observable<boolean | string> {
    const urlOrigin = this.environment.getValue("apiUrl");
    const path = "/auth/login";

    this.http.post<{ token: string, message?: string }>(`${urlOrigin}${path}`, {
      email,
      password,
      fio: "fio"
    }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem("lde-todo_token", response.token);
          return true;
        } else {
          return response.message ?? false;
        }
      })
    )

    // get jwt from api
    // put jwt in localstorage
    // return boolean depending on operation result
    return of(false);
  }

  logout() {
    localStorage.removeItem("lde-todo_token");
  }

  get isAuthenticated(): boolean {
    return Boolean(localStorage.getItem("lde-todo_token"));
  }
}
