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
  cards:{description:string,src:string}[]=[
    {src:'assets/images/svg/angular-icon.svg',description:'Angular'},
    {src:'assets/images/svg/spring-3.svg',description:'Java Spring'},
    {src:'assets/images/svg/bootstrap-5-1.svg',description:'Bootstrap'},
    {src:'assets/images/svg/tailwindcss.svg',description:'Tailwindcss'},
    {src:'assets/images/svg/google-analytics-4.svg',description:'Google Analytics'},
    {src:'assets/images/svg/gitignoreio-1.svg',description:'Git'},
    {src:'assets/images/svg/jenkins-1.svg',description:'Jenkins'},
  ]
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
