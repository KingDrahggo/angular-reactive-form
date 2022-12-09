import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  signupForm: FormGroup;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z1-900]*'),
      ]),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone: new FormControl(null, [
        Validators.maxLength(10),
        Validators.pattern(this.numberRegEx),
        Validators.required,
      ]),
    });
  }
  get username() {
    return this.signupForm.get('username');
  }

  onSubmit() {
    if (this.signupForm.value === null) {
      return;
    }
    // TODO: Use EventEmitter with form value
    console.log(this.signupForm.value);
  }
}
