import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-lesson-details',
  imports: [MatCardModule, NgClass, NgStyle],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
  @Input() Lesson: any;
  getCardClass(): string {
    switch (this.Lesson?.day) {
      case 'Sunday':
        return 'day-sunday';
      case 'Monday':
        return 'day-monday';
      case 'Tuesday':
        return 'day-tuesday';
      case 'Wednesday':
        return 'day-wednesday';
      case 'Thursday':
        return 'day-thursday';
      case 'Friday':
        return 'day-friday';
      default:
        return 'day-default';
    }

  }

  hasLessonStarted(lesson: any): boolean {
    const now = new Date();
    return lesson.StartDate < now;
  }


}
