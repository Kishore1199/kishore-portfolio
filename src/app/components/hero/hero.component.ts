import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  typewriterText = '';
  private titles = ['Java Full Stack Developer', 'Spring Boot Expert', 'Angular Developer', 'Microservices Developer', 'Problem Solver'];
  private currentTitle = 0;
  private currentChar = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.typewrite();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private typewrite() {
    const title = this.titles[this.currentTitle];
    if (!this.isDeleting) {
      this.typewriterText = title.substring(0, this.currentChar + 1);
      this.currentChar++;
      if (this.currentChar === title.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typewrite(), 1500);
        return;
      }
    } else {
      this.typewriterText = title.substring(0, this.currentChar - 1);
      this.currentChar--;
      if (this.currentChar === 0) {
        this.isDeleting = false;
        this.currentTitle = (this.currentTitle + 1) % this.titles.length;
      }
    }
    this.timeoutId = setTimeout(() => this.typewrite(), this.isDeleting ? 40 : 70);
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
