import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  constructor(private el: ElementRef) {}

  private autoTimer: any;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '-40px' }
    );
    this.el.nativeElement.querySelectorAll('.section-animate')
      .forEach((elem: Element) => observer.observe(elem));

    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoTimer);
  }

  private startAutoSlide() {
    this.autoTimer = setInterval(() => {
      const idx = this.categories.findIndex(c => c.name === this.activeCategory);
      this.activeCategory = this.categories[(idx + 1) % this.categories.length].name;
    }, 5000);
  }

  selectCategory(name: string) {
    this.activeCategory = name;
    clearInterval(this.autoTimer);
    this.startAutoSlide();
  }

  activeCategory = 'Backend';

  categories = [
    {
      name: 'Backend',
      skills: [
        { name: 'Java', color: '#ED8B00' },
        { name: 'Spring Boot', color: '#6DB33F' },
        { name: 'Spring', color: '#77BC1F' },
        { name: 'Hibernate', color: '#59666C' },
        { name: 'Spring Security', color: '#6DB33F' },
        { name: 'JPA', color: '#007396' },
        { name: 'JWT', color: '#F7DF1E' },
        { name: 'Microservices', color: '#00BCD4' },
        { name: 'Servlets', color: '#F89820' },
        { name: 'JSP', color: '#F89820' },
        { name: 'JDBC', color: '#007396' },
        { name: 'REST APIs', color: '#10B981' },
        { name: 'Eureka', color: '#6DB33F' },
        { name: 'Spring Cloud API Gateway', color: '#6DB33F' },
        { name: 'Kafka', color: '#231F20' },
        { name: 'PHP', color: '#777BB4' },
        { name: 'OpenEMR', color: '#14B8A6' },
        { name: 'FHIR R4', color: '#F05A28' },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', color: '#DD0031' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'SCSS', color: '#CC6699' },
        { name: 'SASS', color: '#CF649A' },
        { name: 'Bootstrap', color: '#7952B3' },
        { name: 'Ionic Framework', color: '#3880FF' },
        { name: 'jQuery', color: '#0769AD' },
        { name: 'Twig', color: '#8BC34A' },
      ],
    },
    {
      name: 'Database & DevOps',
      skills: [
        { name: 'MySQL', color: '#4479A1' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'MariaDB', color: '#C0765A' },
        { name: 'Firebase', color: '#FFCA28' },
        { name: 'Jenkins', color: '#D33833' },
        { name: 'GitHub', color: '#181717' },
        { name: 'SVN', color: '#809CC9' },
        { name: 'Maven', color: '#C71A36' },
        { name: 'Gradle', color: '#02303A' },
        { name: 'Splunk', color: '#FF5733' },
        { name: 'Docker', color: '#2496ED' },
        { name: 'Google Cloud', color: '#4285F4' },
        { name: 'Sentry', color: '#362D59' },
      ],
    },
    {
      name: 'Testing & Process',
      skills: [
        { name: 'Manual Testing', color: '#43B02A' },
        { name: 'Playwright', color: '#2EAD33' },
        { name: 'Agile', color: '#0052CC' },
        { name: 'Log4j & SLF4J', color: '#F59E0B' },
        { name: 'Jasper Studio', color: '#0A6FB7' },
        { name: 'Spring AOP', color: '#6DB33F' },
      ],
    },
    {
      name: 'Tools & IDEs',
      skills: [
        { name: 'Eclipse', color: '#2C2255' },
        { name: 'Spring Tool Suite', color: '#6DB33F' },
        { name: 'VS Code', color: '#007ACC' },
        { name: 'Postman', color: '#FF6C37' },
      ],
    },
    {
      name: 'AI Tools',
      skills: [
        { name: 'Claude AI', color: '#D97757' },
        { name: 'Claude Code', color: '#E8875F' },
        { name: 'GitHub Copilot', color: '#6E40C9' },
        { name: 'Google Gemini', color: '#4285F4' },
        { name: 'ChatGPT', color: '#10A37F' },
        { name: 'DeepSeek', color: '#4D6BFE' },
      ],
    },
  ];

  get totalSkills() {
    return this.categories.reduce((sum, c) => sum + c.skills.length, 0);
  }

  get activeSkills() {
    return this.categories.find(c => c.name === this.activeCategory)?.skills ?? [];
  }
}
