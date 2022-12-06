import {Component} from '@angular/core';
import {routes} from "../../app.module";


@Component({
  selector: 'lde-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links: (string | undefined)[];
  activeLink: string | undefined;

  constructor() {
    this.links = routes.map(route => route.path).filter(path => path !== "**");
    this.activeLink = this.links[0]
  }
}
