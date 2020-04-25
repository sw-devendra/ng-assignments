import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title: string
  authors:Array<string>
  isActive:boolean
  email = ""
  constructor(service: AuthorsService) {
    this.title = "List of Authors"
    this.authors = service.getAuthors()
    this.isActive = true
  }

  showCourses() {
    console.log("Courses was clicked")
  }

  emailEntered() {
    console.log(this.email)
  }

  tabPressed() {
    this.email = this.email.trim()
    this.email += ".com"
  }

  ngOnInit(): void {
  }

}
