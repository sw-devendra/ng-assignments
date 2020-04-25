import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';


@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {

  form = new FormGroup({
    oldpassword: new FormControl("",[
      Validators.required],
      PasswordValidator.wrongPassword),
    newpassword: new FormControl("",[
      Validators.required,
      Validators.minLength(6)]),
    repeatpassword: new FormControl("",[
      Validators.required]),
  },[PasswordValidator.passwordsDoNotMatch])

  get oldpassword() {
    return this.form.get('oldpassword')
  }

  get newpassword() {
    return this.form.get('newpassword')
  }  
  
  get repeatpassword() {
    return this.form.get('repeatpassword')
  }    
}
