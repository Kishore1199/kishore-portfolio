import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrepComponent } from './components/prep/prep.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    PrepComponent,
    ContactComponent,
    FooterComponent,
    AnimatedBackgroundComponent,
  ],
  template: `
    <app-animated-background></app-animated-background>
    <div class="relative" style="z-index: 2;">
      <app-navbar></app-navbar>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-education></app-education>
        <app-prep></app-prep>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
