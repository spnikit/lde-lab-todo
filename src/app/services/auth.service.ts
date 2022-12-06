import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
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

  login(email: string, password: string): Observable<boolean> {
    // get jwt from api
    // put jwt in localstorage
    // return boolean depending on operation result
    return of(false);
  }

  logout() {
    // clean jws from localstorage
  }

  get isAuthenticated(): boolean {
    return false;
  }
}
