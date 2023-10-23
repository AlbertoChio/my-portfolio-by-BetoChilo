import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  @HostBinding('class.dark') get mode() {
    return this.themeService.darkMode();
  }

  constructor(private themeService:ThemeService){ }
}
