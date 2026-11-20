import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDY_GUIDES, StudyGuide, StudyTopic } from './study.data';

interface TopicView extends StudyTopic { file: string; guide: string; }

/** Interview-prep library: both study guides + a searchable list of topics that deep-link into them. */
@Component({
  selector: 'app-prep',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="prep" style="background:var(--bg-page);padding:6rem 0;">
  <div style="max-width:1200px;margin:0 auto;padding:0 1.5rem;">
    <div style="margin-bottom:3rem;" class="section-animate">
      <p class="section-label">Study Notes</p>
      <h2 class="section-heading">Interview Prep Library</h2>
      <p style="font-size:0.95rem;color:var(--text-muted);margin-top:0.75rem;max-width:640px;">
        The notes I keep sharp with — {{ totalTopics }} topics and {{ totalQuestions | number }}+ interview questions across
        Java full-stack and DSA. Open a guide or jump straight to a topic.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div *ngFor="let g of guides" class="card p-7 section-animate" style="position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;" [style.background]="'linear-gradient(90deg,' + g.accent + ',' + g.accent2 + ')'"></div>
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0;"
               [style.background]="'linear-gradient(135deg,' + g.accent + ',' + g.accent2 + ')'">
            <svg *ngIf="g.icon === 'coffee'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
            <svg *ngIf="g.icon === 'cpu'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>
          </div>
          <div>
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-dark);margin:0;">{{ g.title }}</h3>
            <p style="font-size:0.82rem;color:var(--text-muted);margin:0.2rem 0 0;">{{ g.subtitle }}</p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--border-light);border-radius:12px;margin-bottom:1.25rem;">
          <div style="text-align:center;padding:0.75rem;"><div style="font-size:1.5rem;font-weight:900;" [style.color]="g.accent">{{ g.topics.length }}</div><div style="font-size:0.72rem;color:var(--text-muted);">topics</div></div>
          <div style="text-align:center;padding:0.75rem;border-left:1px solid var(--border-light);"><div style="font-size:1.5rem;font-weight:900;" [style.color]="g.accent">{{ questionsOf(g) | number }}</div><div style="font-size:0.72rem;color:var(--text-muted);">Q&amp;As</div></div>
          <div style="text-align:center;padding:0.75rem;border-left:1px solid var(--border-light);"><div style="font-size:1.5rem;font-weight:900;" [style.color]="g.accent">{{ groupsOf(g).length }}</div><div style="font-size:0.72rem;color:var(--text-muted);">areas</div></div>
        </div>
        <a [href]="g.file" target="_blank" rel="noopener" class="btn-primary" style="text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;">Open guide ↗</a>
      </div>
    </div>

    <div class="card p-6 section-animate">
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:space-between;align-items:center;margin-bottom:1rem;">
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          <button *ngFor="let f of filters" type="button" class="skill-tab" [class.active]="filter === f" (click)="setFilter(f)">{{ f }}</button>
        </div>
        <input type="search" placeholder="Search topics — e.g. Kafka, Docker, DP…" (input)="setQuery($any($event.target).value)"
               style="padding:0.6rem 1rem;border-radius:8px;border:1.5px solid var(--border-light);background:var(--bg-page);color:var(--text-dark);font-size:0.875rem;min-width:260px;outline:none;">
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.75rem;">{{ visible.length }} topics</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:0.6rem;">
        <a *ngFor="let t of shown" [href]="t.file + '#' + t.id" target="_blank" rel="noopener"
           style="display:block;padding:0.75rem 0.9rem;border-radius:10px;border:1px solid var(--border-light);background:var(--bg-white);text-decoration:none;transition:border-color 0.2s,transform 0.2s;"
           onmouseover="this.style.borderColor='var(--orange)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--border-light)';this.style.transform='none'">
          <div style="font-size:0.85rem;font-weight:700;color:var(--text-dark);">{{ t.title }}</div>
          <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">
            {{ t.group }}<span *ngIf="t.questions"> · {{ t.questions }} Q</span>
            <span *ngIf="t.isNew" style="margin-left:0.35rem;padding:0 0.4rem;border-radius:99px;background:rgba(16,185,129,0.12);color:#059669;font-weight:700;">New</span>
          </div>
        </a>
      </div>
      <p *ngIf="!visible.length" style="color:var(--text-muted);padding:1rem 0;">No topics match.</p>
      <div *ngIf="visible.length > limit" style="text-align:center;margin-top:1rem;">
        <button type="button" class="btn-outline-light" (click)="expanded = !expanded" style="color:var(--text-dark);border-color:var(--border-light);">
          {{ expanded ? 'Show fewer' : 'Show all ' + visible.length + ' topics' }}
        </button>
      </div>
    </div>
  </div>
</section>
  `,
})
export class PrepComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  guides: StudyGuide[] = STUDY_GUIDES;
  filters = ['All', ...STUDY_GUIDES.map(g => g.short), 'New topics'];
  filter = 'All';
  query = '';
  expanded = false;
  limit = 18;

  private all: TopicView[] = STUDY_GUIDES.flatMap(g => g.topics.map(t => ({ ...t, file: g.file, guide: g.short })));
  totalTopics = this.all.length;
  totalQuestions = this.all.reduce((n, t) => n + t.questions, 0);

  get visible(): TopicView[] {
    const q = this.query.trim().toLowerCase();
    return this.all.filter(t =>
      (this.filter === 'All' || (this.filter === 'New topics' ? t.isNew : t.guide === this.filter)) &&
      (!q || t.title.toLowerCase().includes(q) || t.group.toLowerCase().includes(q)));
  }
  get shown(): TopicView[] { return this.expanded ? this.visible : this.visible.slice(0, this.limit); }

  setFilter(f: string) { this.filter = f; this.expanded = false; }
  setQuery(q: string) { this.query = q; this.expanded = false; }
  questionsOf(g: StudyGuide) { return g.topics.reduce((n, t) => n + t.questions, 0); }
  groupsOf(g: StudyGuide) { return [...new Set(g.topics.map(t => t.group))]; }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '-40px' }
    );
    this.el.nativeElement.querySelectorAll('.section-animate').forEach((elem: Element) => observer.observe(elem));
  }
}
