import { Component, HostBinding, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Beto_ChiLo_Port_Folio';
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
  showMenu = false;
  processing=false;
  cards: { description: string; src: string }[] = [
    { src: 'assets/images/svg/angular-icon.svg', description: 'Angular' },
    { src: 'assets/images/svg/spring-3.svg', description: 'Java Spring' },
    { src: 'assets/images/svg/bootstrap-5-1.svg', description: 'Bootstrap' },
    { src: 'assets/images/svg/tailwindcss.svg', description: 'Tailwindcss' },
    {
      src: 'assets/images/svg/google-analytics-4.svg',
      description: 'Google Analytics',
    },
    { src: 'assets/images/svg/gitignoreio-1.svg', description: 'Git' },
    { src: 'assets/images/svg/jenkins-1.svg', description: 'Jenkins' },
  ];

  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup<{
      name: FormControl<string | null>;
      email: FormControl<string | null>;
      message: FormControl<string | null>;
    }>({
      name: new FormControl<string | null>(null, [
        Validators.required,
        Validators.nullValidator,
      ]),
      email: new FormControl<string | null>(null, [
        Validators.required,
        Validators.nullValidator,
        Validators.email,
      ]),
      message: new FormControl<string | null>(null, [
        Validators.required,
        Validators.nullValidator,
      ]),
    });
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  contactFormSubmit(form: FormGroup) {
    this.processing = true;
    setTimeout(() => {
      this.processing = false
    }, 5000);
    debugger;
  }
}
