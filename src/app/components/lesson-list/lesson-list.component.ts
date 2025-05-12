import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LessonDetailsComponent } from "../lesson-details/lesson-details.component";

@Component({
  selector: 'app-lesson-list',
  imports: [NgFor, LessonDetailsComponent],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  gymLessons = [
  {
    lessonName: "Yoga for Beginners",
    teacherName: "Sarah Cohen",
    NumberSessions: 8,
    StartDate: new Date("2025-06-01"),
    price: 300,
    day: "Sunday",
    lessonTime: "18:00"
  },
  {
    lessonName: "Pilates Core",
    teacherName: "Dana Levi",
    NumberSessions: 10,
    StartDate: new Date("2025-06-03"),
    price: 350,
    day: "Tuesday",
    lessonTime: "19:00"
  },
  {
    lessonName: "HIIT Training",
    teacherName: "Yossi Mizrahi",
    NumberSessions: 12,
    StartDate: new Date("2025-06-02"),
    price: 400,
    day: "Monday",
    lessonTime: "20:00"
  },
  {
    lessonName: "Zumba Dance",
    teacherName: "Lina Abadi",
    NumberSessions: 8,
    StartDate: new Date("2025-06-05"),
    price: 320,
    day: "Thursday",
    lessonTime: "17:30"
  },
  {
    lessonName: "Strength & Conditioning",
    teacherName: "David Baruch",
    NumberSessions: 10,
    StartDate: new Date("2025-06-04"),
    price: 450,
    day: "Wednesday",
    lessonTime: "18:45"
  },
  {
    lessonName: "Stretching and Flexibility",
    teacherName: "Tamar Ben-Ami",
    NumberSessions: 6,
    StartDate: new Date("2025-06-06"),
    price: 250,
    day: "Friday",
    lessonTime: "08:00"
  },
  // שכפולים חוזרים גם עם תאריך מתוקן:
  {
    lessonName: "Yoga for Beginners",
    teacherName: "Sarah Cohen",
    NumberSessions: 8,
    StartDate: new Date("2025-06-01"),
    price: 300,
    day: "Sunday",
    lessonTime: "18:00"
  },
  {
    lessonName: "Pilates Core",
    teacherName: "Dana Levi",
    NumberSessions: 10,
    StartDate: new Date("2025-06-03"),
    price: 350,
    day: "Tuesday",
    lessonTime: "19:00"
  },
  {
    lessonName: "HIIT Training",
    teacherName: "Yossi Mizrahi",
    NumberSessions: 12,
    StartDate: new Date("2025-06-02"),
    price: 400,
    day: "Monday",
    lessonTime: "20:00"
  },
  {
    lessonName: "Zumba Dance",
    teacherName: "Lina Abadi",
    NumberSessions: 8,
    StartDate: new Date("2025-06-05"),
    price: 320,
    day: "Thursday",
    lessonTime: "17:30"
  },
  {
    lessonName: "Strength & Conditioning",
    teacherName: "David Baruch",
    NumberSessions: 10,
    StartDate: new Date("2025-06-04"),
    price: 450,
    day: "Wednesday",
    lessonTime: "18:45"
  },
  {
    lessonName: "Stretching and Flexibility",
    teacherName: "Tamar Ben-Ami",
    NumberSessions: 6,
    StartDate: new Date("2025-06-06"),
    price: 250,
    day: "Friday",
    lessonTime: "08:00"
  },
  {
    lessonName: "Yoga for Beginners",
    teacherName: "Sarah Cohen",
    NumberSessions: 8,
    StartDate: new Date("2025-06-01"),
    price: 300,
    day: "Sunday",
    lessonTime: "18:00"
  },
  {
    lessonName: "Pilates Core",
    teacherName: "Dana Levi",
    NumberSessions: 10,
    StartDate: new Date("2025-06-03"),
    price: 350,
    day: "Tuesday",
    lessonTime: "19:00"
  },
  {
    lessonName: "HIIT Training",
    teacherName: "Yossi Mizrahi",
    NumberSessions: 12,
    StartDate: new Date("2025-06-02"),
    price: 400,
    day: "Monday",
    lessonTime: "20:00"
  },
  {
    lessonName: "Zumba Dance",
    teacherName: "Lina Abadi",
    NumberSessions: 8,
    StartDate: new Date("2025-06-05"),
    price: 320,
    day: "Thursday",
    lessonTime: "17:30"
  },
  {
    lessonName: "Strength & Conditioning",
    teacherName: "David Baruch",
    NumberSessions: 10,
    StartDate: new Date("2025-06-04"),
    price: 450,
    day: "Wednesday",
    lessonTime: "18:45"
  },
  {
    lessonName: "Stretching and Flexibility",
    teacherName: "Tamar Ben-Ami",
    NumberSessions: 6,
    StartDate: new Date("2024-06-06"),
    price: 250,
    day: "Friday",
    lessonTime: "08:00"
  },
];

}
