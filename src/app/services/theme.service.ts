import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDark = new BehaviorSubject<boolean>(false);
  isDark$ = this.isDark.asObservable();

  constructor() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved === 'dark' || (!saved && prefersDark);
    this.setDark(dark);
  }

  toggle() {
    this.setDark(!this.isDark.value);
  }

  private setDark(dark: boolean) {
    this.isDark.next(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  get isDarkMode(): boolean {
    return this.isDark.value;
  }
}
