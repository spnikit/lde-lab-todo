import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lde-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
  }

  handelSubmit(form: NgForm) {

    if (form.valid) {
      this.auth.login(this.email, this.password)
        .subscribe({
          next: result => {
            // redirect to another page.
            if (result) {
              this.router.navigateByUrl("/list");
            } else {
              this.errorMessage = "Something went wrong. Try again."
            }
          },
          error: errorObj => {
            const error = errorObj.error;
            if (error && error instanceof Array) {
              this.errorMessage = error.reduce((acc, curr) => acc + "\n" + curr, "");
            } else {
              this.errorMessage = errorObj.error.message
            }
          }
        })
    }
  }
}

