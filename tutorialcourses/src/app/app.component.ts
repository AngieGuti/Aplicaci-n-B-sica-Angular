import { Component } from '@angular/core';
import { CourseComponent } from "./course/course.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CourseComponent]
})
export class AppComponent {
  title = 'tutorialcourses';
}
