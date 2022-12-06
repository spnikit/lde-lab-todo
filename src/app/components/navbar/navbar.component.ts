import {Component} from '@angular/core';
import {routes} from "../../app.module";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'lde-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links: (string | undefined)[];
  activeLink: string | undefined;

  constructor(private router: Router) {
    this.links = routes.map(route => route.path).filter(path => path !== "**");
    this.activeLink = this.links[0]

    // detect changes in routing, and apply current path to activeLink
    this.router.events.forEach(event => {
      if(event instanceof  NavigationEnd){
        this.activeLink = event.url.substring(1);
      }
    })
  }




}

//todo: change header link names with pipe
//todo: play with styles
