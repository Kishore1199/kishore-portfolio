import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '-40px' }
    );
    this.el.nativeElement.querySelectorAll('.section-animate')
      .forEach((elem: Element) => observer.observe(elem));
  }
  education = [
    {
      degree: 'Bachelor of Mechanical Engineering',
      short: 'B.E',
      institution: 'M.Kumarasamy College of Engineering, Karur',
      period: '2016 – 2020',
      grade: '62%',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      description: 'Engineering fundamentals with strong analytical and problem-solving skills applied to software development.',
    },
    {
      degree: 'Higher Secondary Certificate',
      short: 'HSC',
      institution: 'Sri Ragavendra Matric Higher Secondary School, Veeraganur',
      period: '2014 – 2016',
      grade: '80%',
      gradient: 'linear-gradient(135deg, #22c55e, #14b8a6)',
      description: 'Strong academic foundation in science and mathematics.',
    },
    {
      degree: 'Secondary School Leaving Certificate',
      short: 'SSLC',
      institution: 'Sri Ragavendra Matric Higher Secondary School, Veeraganur',
      period: '2013 – 2014',
      grade: '80%',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      description: 'Foundational schooling with focus on core academics.',
    },
  ];
}
