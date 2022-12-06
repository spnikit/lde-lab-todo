import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';


export const ENVIRONMENT = new InjectionToken<{ [key: string]: any }>("environment");


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly environment: any;

  constructor(@Optional() @Inject(ENVIRONMENT) environment: any) {
    this.environment = environment !== null ? environment : {};
  }

  getValue(key: string, defaultVal?: any): any {
    return this.environment[key] || defaultVal;
  }
}
