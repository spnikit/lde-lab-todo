import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'lde-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email: string = "";
  password: string = "";

  constructor(private auth: AuthService) {
  }

  handelSubmit(form: NgForm) {
    
    if (form.valid) {
      console.log(this.email, this.password, form)
    }

  }
}
