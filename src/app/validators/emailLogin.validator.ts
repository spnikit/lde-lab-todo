import {AbstractControl, ValidationErrors} from "@angular/forms";
import {from, map, mergeMap, Observable, tap, toArray} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const api = "https://swapi.dev/api/people"

@Injectable({
  providedIn: "root"
})
export class EmailLoginValidator {


  static checkIfStarWarsHero(http: HttpClient) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return http.get<any>(api)
        .pipe(
          map((val: { results: any }) => val.results),
          mergeMap((val: any[]) => from(val)),
          map((hero: { name: string }) => hero.name.toLowerCase()),
          toArray(),
          tap(console.log),
          map((array: string[]) => {
            if (array.includes(control.value.toLowerCase())) {
              return null;
            } else {
              return {starwarsError: "Current User is not Star Wars Hero!"}
            }
          })
        );
    }
  }


}
