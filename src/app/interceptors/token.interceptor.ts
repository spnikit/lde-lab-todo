import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {EnvironmentService} from "../services/environment.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private environment: EnvironmentService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.auth.token;
    const apiUrl = this.environment.getValue("apiUrl");
    const isApiUrl = request.url.startsWith(apiUrl);


    if (token && isApiUrl) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${this.auth.token}`}
      })
    }

    return next.handle(request);
  }
}
