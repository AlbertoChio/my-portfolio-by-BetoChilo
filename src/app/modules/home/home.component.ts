import { Component, HostBinding, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ThemeService } from 'src/app/core/theme.service';
import { environment } from 'src/environments/environment';
import { ResendService } from './core/resend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

  constructor(private resendService:ResendService) {
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

  
  
  

  /**
   * 
   * email send
   * 
   * @param form contactForm
   */
  contactFormSubmit(form: FormGroup) {
    this.processing.set(true);
    this.resendService.sendEmail(form.value.name,form.value.email,form.value.message)
    .subscribe({
      next: (v) => this.processing.set(true),
      error: (e) => this.processing.set(true),
  }
    )
    //  emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'a.chio@outlook.com',
    //   subject: 'Hello World',
    //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    // }).finally(
    //   ()=>{
    //     this.processing.set(false);
    //   }
    // );
  }
}