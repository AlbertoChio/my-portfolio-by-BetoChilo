import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const RESEND_API = '/emails';

@Injectable({
  providedIn: 'root',
})
export class ResendService {
  constructor(private http: HttpClient) {}

  public sendEmail(name: string, email: string, message: string) {
    return this.getContactEmail().pipe(
      concatMap((emailHTML: string) => {
        emailHTML = emailHTML.replace('{{mensaje}}', message);
        return this.http.post(
          RESEND_API,
          {
            cc: [],
            to: [email],
            bcc: ['a.chio@outlook.com'],
            from: 'onboarding@resend.dev',
            html: emailHTML,
            tags: [],
            text: `¡Saludos ${name}, tu mensaje ha llegado!`,
            subject: `PortFolio Alberto ChiLo`,
          },

          {
            headers: {
              Authorization: `Bearer ${environment.RESEND_API_KEY}`,
            },
          },
        );
      }),
    );
  }

  private getContactEmail() {
    let path = 'assets/emails/contact.html';
    return this.http.get(path, { responseType: 'text' });
  }
}
