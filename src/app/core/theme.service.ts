import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  private _darkMode = signal<boolean>(false);

  public get darkMode(): WritableSignal<boolean> {
    return this._darkMode;
  }

  public set darkMode(darkMode: boolean) {
    this._darkMode.set(darkMode);
  }
}
