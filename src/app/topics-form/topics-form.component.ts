import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  get topics() {
    return (this.form.get('topics') as FormArray)
  }

  addItem(c: HTMLInputElement) {
    this.topics.push(new FormControl(c.value))
    c.value = ""
  }
  removeItem(c: FormControl) {
    let index = this.topics.controls.indexOf(c);
    this.topics.removeAt(index)
  }
}
