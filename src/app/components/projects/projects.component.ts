import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '-40px' }
    );
    this.el.nativeElement.querySelectorAll('.section-animate')
      .forEach((elem: Element) => observer.observe(elem));
  }

  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
  goTo(i: number) {
    this.currentIndex = i;
  }

  projects = [
    {
      title: '75Health EHR',
      period: 'Dec 2024 – Present',
      type: 'Kaaspro Enterprises',
      badge: 'Live Product',
      badgeColor: '#10B981',
      image: 'assets/75health-new.png',
      gradient: 'linear-gradient(135deg,#3b82f6,#06b6d4)',
      tech: ['Java 21', 'Spring Boot', 'Spring Security', 'Hibernate 6.x', 'Angular 17', 'MySQL', 'MongoDB', 'Gradle', 'Log4j', 'GitHub'],
      features: [
        'Cloud-based EHR platform for clinics & hospitals worldwide',
        'Patient records, clinical documentation, SOAP charts & e-prescriptions',
        'Appointment scheduling and lab integration',
        'Improved performance, security & interoperability for multi-user clinical workflows',
        'Enhanced UI/UX for providers — smoother navigation, faster clinical operations',
        'Role-based access, audit tracking & secure data handling for healthcare compliance',
        'Scalable from single-clinic to multi-location facilities',
      ],
      link: 'https://ehr.75health.com',
    },
    {
      title: '75Health EMR',
      period: 'Mar 2026 – Present',
      type: 'Kaaspro Enterprises',
      badge: 'Live Product',
      badgeColor: '#10B981',
      image: 'assets/75health-emr.jpg',
      imagePosition: 'left top',
      gradient: 'linear-gradient(135deg,#14b8a6,#6366f1)',
      tech: ['PHP 8.4', 'OpenEMR 8', 'MariaDB', 'Docker', 'FHIR R4', 'JavaScript', 'jQuery', 'Twig', 'Google Cloud', 'Sentry', 'Playwright', 'Claude Code'],
      features: [
        'Cloud EMR SaaS for 75Health, built on the open-source OpenEMR platform',
        'Upgraded end-to-end to OpenEMR 8 / PHP 8.4 using AI tools (Claude Code, GitHub Copilot)',
        'Multi-tenant SaaS: clinic signup with Free & Premium plan limits',
        'Google SSO, OTP emails, appointment SMS and FHIR R4 REST API',
        'Dockerized deployments to Google Cloud with Sentry monitoring',
      ],
      link: 'https://emr.75health.com',
    },
    {
      title: '75Health Website',
      period: 'Dec 2024 – Present',
      type: 'Kaaspro Enterprises',
      badge: 'Live',
      badgeColor: '#10B981',
      image: 'assets/75health-website.png',
      gradient: 'linear-gradient(135deg,#22c55e,#14b8a6)',
      tech: ['Angular 17', 'Bootstrap', 'HTML', 'CSS', 'TypeScript'],
      features: [
        'Cloud EHR/EMR platform driving digital transformation for practices in multiple countries',
        'Responsive product showcase website for EHR/EMR solution',
        'Improved UI layout and structured content hierarchy',
        'Cross-browser compatibility & performance optimization',
        'Consistent design system across all pages',
        'Digital showcase for medical practice transformation',
      ],
      link: 'https://75health.com',
    },
    {
      title: 'Kaaspro Website',
      period: 'Dec 2024 – Present',
      type: 'Kaaspro Enterprises',
      badge: 'Live',
      badgeColor: '#10B981',
      image: 'assets/kaaspro-website.jpg',
      gradient: 'linear-gradient(135deg,#f97316,#ef4444)',
      tech: ['HTML', 'CSS', 'Bootstrap', 'Java'],
      features: [
        'Responsive website for IT services company',
        'Showcased services: web dev, cloud, mobile-app development',
        'Structured content for improved readability & navigation',
        'Professional online presence across devices & browsers',
      ],
      link: 'https://kaaspro.com',
    },
    {
      title: 'MySales – CRM Application',
      period: 'Jan 2024 · Internship',
      type: 'Techietact Solutions',
      badge: 'Internship',
      badgeColor: '#8B5CF6',
      image: null,
      gradient: 'linear-gradient(135deg,#a855f7,#ec4899)',
      tech: ['Java', 'Spring Boot 3.x', 'Angular 16', 'Microservices', 'Spring Cloud API Gateway 2022.0.2', 'Spring Security', 'Hibernate 6.x', 'Maven', 'MySQL'],
      features: [
        'CRM platform to manage customer interactions & sales',
        'Centralized customer data storage & organization',
        'Sales activity tracking and team communication',
        'Microservices architecture with Spring Cloud API Gateway',
        'JWT security and reporting for in/out transactions',
      ],
      link: null,
    },
    {
      title: 'MyCognitiv – Online Testing Platform',
      period: 'Jan 2024 · Internship',
      type: 'Techietact Solutions',
      badge: 'Internship',
      badgeColor: '#8B5CF6',
      image: null,
      gradient: 'linear-gradient(135deg,#8b5cf6,#3b82f6)',
      tech: ['Java 8', 'Spring MVC 4.x', 'Spring Security', 'Hibernate 5.x', 'JSP', 'MySQL', 'Maven', 'Log4j', 'AJAX', 'GitHub'],
      features: [
        'Online exam management for organizations',
        'Question creation, results & category modules',
        'Multi-layer architecture: rich UI, business delegates & business layers',
        'Spring Transaction management & Log4j logging',
        'Custom caching mechanism for performance',
        'Hibernate persistence layer with exception handling',
      ],
      link: null,
    },
  ];
}
