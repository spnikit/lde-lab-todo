import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormControlStatus, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {EmailLoginValidator} from "../../validators/emailLogin.validator";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'lde-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  errorMessage: string = "";
  spinner: boolean = false;

  loginForm!: FormGroup<{
    email: FormControl,
    password: FormControl
  }>;

  constructor(
    public auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", {
        asyncValidators: EmailLoginValidator.checkIfStarWarsHero(this.http),
        updateOn: "blur"
      }],
      password: [""]
    });

    const emailControl = this.loginForm.get("email");

    emailControl?.statusChanges.subscribe((status: FormControlStatus) => {
      if(status === "INVALID"){
        this.errorMessage = emailControl?.getError("starwarsError")
      } else {
        this.errorMessage = "";
      }
    });

  }

  handelSubmit() {

    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;

      this.auth.login(email, password)
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

