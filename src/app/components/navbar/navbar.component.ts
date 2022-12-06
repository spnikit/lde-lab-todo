import {Component} from '@angular/core';
import {routes} from "../../app.module";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'lde-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links: (string | undefined)[];
  activeLink: string | undefined;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private auth: AuthService
  ) {
    this.links = routes.map(route => route.path).filter(path => path !== "**");
    this.activeLink = this.links[0]

    // detect changes in routing and apply current path to activeLink
    this.router.events.forEach(event => {

      // show snackbar if not logged in
      if (event instanceof RouterEvent) {
        if (event.url === "/list" && !this.auth.isAuthenticated) {
          this._snackBar.open("Залогиньтесь для доступа к ToDo", "Хорошо!")
        }
      }

      if (event instanceof NavigationEnd) {
        this.activeLink = event.url.substring(1);
      }
    })
  }


}

//todo: change header link names with pipe
//todo: play with styles