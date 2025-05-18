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
      lessonName: "Beast Mode Bootcamp",
      teacherName: "Nadav Blitz",
      NumberSessions: 9,
      StartDate: new Date("2025-06-01"),
      price: 390,
      day: "Sunday",
      lessonTime: "09:00"
    },
    {
      lessonName: "Core Crushers",
      teacherName: "Shira Azulay",
      NumberSessions: 10,
      StartDate: new Date("2025-06-02"),
      price: 420,
      day: "Monday",
      lessonTime: "17:15"
    },
    {
      lessonName: "Flex & Flow",
      teacherName: "Ronen Shavit",
      NumberSessions: 7,
      StartDate: new Date("2025-06-03"),
      price: 310,
      day: "Tuesday",
      lessonTime: "18:00"
    },
    {
      lessonName: "Warrior Strength",
      teacherName: "Tamar Levi",
      NumberSessions: 8,
      StartDate: new Date("2025-06-04"),
      price: 450,
      day: "Wednesday",
      lessonTime: "19:45"
    },
    {
      lessonName: "JumpFit Extreme",
      teacherName: "Daniel Mor",
      NumberSessions: 6,
      StartDate: new Date("2025-06-05"),
      price: 280,
      day: "Thursday",
      lessonTime: "08:30"
    },
    {
      lessonName: "Zen Power Flow",
      teacherName: "Yael Ezra",
      NumberSessions: 11,
      StartDate: new Date("2025-06-06"),
      price: 370,
      day: "Friday",
      lessonTime: "10:00"
    },

    {
      lessonName: "Back to Basics",
      teacherName: "Moti Dror",
      NumberSessions: 8,
      StartDate: new Date("2024-03-15"),
      price: 290,
      day: "Sunday",
      lessonTime: "10:00"
    },
    {
      lessonName: "Energy Circuit",
      teacherName: "Avigail Bar",
      NumberSessions: 10,
      StartDate: new Date("2024-04-08"),
      price: 350,
      day: "Monday",
      lessonTime: "16:00"
    },
    {
      lessonName: "Glutes & Gains",
      teacherName: "Yaron Elbaz",
      NumberSessions: 6,
      StartDate: new Date("2024-05-02"),
      price: 300,
      day: "Tuesday",
      lessonTime: "18:30"
    },
    {
      lessonName: "Morning Mobility",
      teacherName: "Noya Tsur",
      NumberSessions: 9,
      StartDate: new Date("2024-01-10"),
      price: 320,
      day: "Wednesday",
      lessonTime: "07:00"
    },
    {
      lessonName: "Tabata Fury",
      teacherName: "Itay Mashiah",
      NumberSessions: 12,
      StartDate: new Date("2024-02-22"),
      price: 390,
      day: "Thursday",
      lessonTime: "19:30"
    },
    {
      lessonName: "Balance & Burn",
      teacherName: "Hila Nahum",
      NumberSessions: 5,
      StartDate: new Date("2024-06-07"),
      price: 250,
      day: "Friday",
      lessonTime: "09:15"
    }
  ];


}
