import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-modal.component.html',
  styleUrl: './resume-modal.component.scss',
})
export class ResumeModalComponent {
  @Output() close = new EventEmitter<void>();
}
