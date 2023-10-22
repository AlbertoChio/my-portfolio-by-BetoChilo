import { Component, HostBinding, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  darkMode = signal<boolean>(false);

  currentSection = signal<
    null | 'sobre-mi' | 'techs' | 'experiencia' | 'contacto'
  >('sobre-mi');

  sections?: NodeListOf<HTMLElement>;

  eventSubscription = fromEvent(window, 'scroll').subscribe((e) => {
    this.onscroll();
  });

  onscroll() {
    debugger
    let current: any = '';
    this.sections?.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    this.currentSection.update((s) => {
      if (s !== current && current !== '') {
        return current;
      }
      if(current === ''){
        return 'sobre-mi'
      }
      return s;
    });
  }

  processing: WritableSignal<boolean> = signal<boolean>(false);

  cards: WritableSignal<
    {
      description: string;
      src: string;
    }[]
  > = signal<{ description: string; src: string }[]>([
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
  ]);

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

  ngOnInit() {
    this.sections = document.querySelectorAll('section');
  }

  contactFormSubmit(form: FormGroup) {
    this.processing.set(true);
    setTimeout(() => {
      this.processing.set(false);
    }, 5000);
  }
}
