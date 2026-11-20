import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ResumeModalComponent } from '../resume-modal/resume-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ResumeModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  isDark = false;
  isResumeOpen = false;

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Prep', href: '#prep' },
    { label: 'Contact', href: '#contact' },
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDark$.subscribe(v => this.isDark = v);
    setTimeout(() => this.onScroll(), 0);
  }

  ngOnDestroy() {}

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
    this.updateActiveSection();
  }

  activeSection = '#home';

  /** Highlights the nav link of the section currently under the navbar. */
  private updateActiveSection() {
    const offset = 120; // navbar height + a little breathing room
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      this.activeSection = this.navLinks[this.navLinks.length - 1].href;
      return;
    }
    let current = this.navLinks[0].href;
    for (const link of this.navLinks) {
      const el = document.querySelector(link.href);
      if (el && el.getBoundingClientRect().top - offset <= 0) current = link.href;
    }
    this.activeSection = current;
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  toggleMobile() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(href: string) {
    this.isMobileMenuOpen = false;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  openResume() {
    this.isResumeOpen = true;
    this.isMobileMenuOpen = false;
  }

  closeResume() {
    this.isResumeOpen = false;
  }
}
