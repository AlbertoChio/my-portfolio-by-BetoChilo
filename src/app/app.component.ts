import { Component, HostBinding, signal } from '@angular/core';
import {  } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beto_ChiLo_Port_Folio';
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {return this.darkMode(); }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
