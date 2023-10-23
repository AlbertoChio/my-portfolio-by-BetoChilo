import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription, fromEvent, map } from 'rxjs';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  public currentSection = signal<
    null | 'sobre-mi' | 'techs' | 'experiencia' | 'contacto'
  >('sobre-mi');

  public sections?: NodeListOf<HTMLElement>;

  private scroll$ = fromEvent(document, 'scroll');

  private subs: Subscription[] = [];

  constructor(public themeService: ThemeService) {
    this.subs.push(
      this.scroll$.subscribe((change) => {
        this.onScroll();
      }),
    );
  }

  private onScroll() {
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
      if (current === '') {
        return 'sobre-mi';
      }
      return s;
    });
  }

  ngOnInit() {
    this.sections = document.querySelectorAll('section');
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

}
