import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace], UsernameValidator.isNotUniquee),
    password: new FormControl
  })

  get username() {
    return this.form.get('username')
  }
}
