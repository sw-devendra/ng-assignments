import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  courseCategories = [
    {id:1, name:"Development"},
    {id:2, name:"Testing"},
    {id:3, name:"Designing"},
  ]
  log(x) {
    console.log(x)
  }

}
