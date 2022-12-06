import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {EnvironmentService} from "./environment.service";
import {IUser} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorageJwtTokenKey = "lde-todo_token";

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) {
  }

  login(email: string, password: string): Observable<boolean> {
    const urlOrigin = this.environment.getValue("apiUrl");
    const path = "/auth/login";

    return this.http.post<{ token: string}>(`${urlOrigin}${path}`, {
      email,
      password,
      fio: "fio"
    }).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem(this.localStorageJwtTokenKey, response.token);
          return true;
        } else {
          return false;
        }
      })
    )
  }

  logout() {
    localStorage.removeItem(this.localStorageJwtTokenKey);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  public get user(): IUser | null {
    const token = localStorage.getItem('del_meetups_auth_token');
    if (token) {
      return this.parseJwt(token);
    } else return null;
  }

  get token(): string | null {
    return localStorage.getItem(this.localStorageJwtTokenKey);
  }

  get isAuthenticated(): boolean {
    return Boolean(localStorage.getItem(this.localStorageJwtTokenKey));
  }
}
