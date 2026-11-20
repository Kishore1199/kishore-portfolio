import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '-40px' }
    );
    this.el.nativeElement.querySelectorAll('.section-animate')
      .forEach((elem: Element) => observer.observe(elem));
  }
  achievements = [
    {
      title: '75Health EHR Platform',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      items: [
        'Cloud EHR for clinics & hospitals worldwide',
        'Patient records, SOAP charts & e-prescriptions',
        'Appointment scheduling & lab integration',
        'Role-based access & audit tracking',
        'System performance & security improvements',
        'Spring Boot REST API development',
        'Angular 17 frontend components',
        'MongoDB & MySQL data management',
      ],
    },
    {
      title: '75Health EMR (OpenEMR)',
      gradient: 'linear-gradient(135deg, #14b8a6, #6366f1)',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      items: [
        'PHP / OpenEMR 8 cloud EMR at emr.75health.com',
        'Upgraded end-to-end using AI tools (Claude Code, Copilot)',
        'Multi-tenant signup with Free & Premium plan limits',
        'Google SSO, OTP emails & appointment SMS',
        'FHIR R4 REST API for patient import/export',
        'Docker deployments on Google Cloud with Sentry',
      ],
    },
    {
      title: '75Health & Kaaspro Websites',
      gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
      items: [
        'Responsive static web pages with Angular 17',
        'EHR/EMR product showcase for 75Health',
        'IT services pages for Kaaspro.com',
        'UI layout & content structure improvements',
        'Performance optimization & consistent design',
        'Cross-browser & cross-device compatibility',
      ],
    },
    {
      title: 'Roles & Responsibilities',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
      items: [
        'Involved in migration & development activities',
        'Analyse requirements & build technical components',
        'Daily scrum stand-up & progress reporting',
        'System testing support for deployments',
        'Defect tracking and quality assurance',
        'Code review and documentation',
      ],
    },
    {
      title: 'Internship – MySales & MyCognitiv',
      gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      items: [
        'CRM app with Microservices & Spring Boot 3.x',
        'Spring Cloud API Gateway & JWT auth',
        'Online exam platform with Spring MVC & Hibernate',
        'Multi-layer architecture with caching',
        'Built web apps with Java, Angular, JSP & MySQL',
        'Learned industry-standard development practices',
      ],
    },
  ];
}
