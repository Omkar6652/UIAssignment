import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');
  currentTheme$ = this.themeSubject.asObservable();

  constructor() {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark');
    }
  }

  setLightTheme(): void {
    this.setTheme('light');
  }

  setDarkTheme(): void {
    this.setTheme('dark');
  }

  private setTheme(theme: Theme): void {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
  }
}