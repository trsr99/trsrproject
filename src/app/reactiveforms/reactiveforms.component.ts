import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  emailid;
  passwd;
  formdata;

  form_messages = {
    'emailid': [{ type: 'required', message: 'email id should not be null..!' },
    { type: 'minlength', message: 'email id should be of minimum 5 characters..!' },
    { type: 'maxlength', message: 'email id should not be greater than 8 characters..!' },
    { type: 'pattern', message: 'email id should have @ character..!' }],
    'passwd': [{ type: 'required', message: 'Password should not be null..!' }]
  };

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern("[^ @]*@[^ @]*")]),
      passwd: new FormControl("", [Validators.required, this.passwordvalidation])
    });
  }

  myClickFunction(data) {
    this.formdata = new FormGroup({
      emailid: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern("[^ @]*@[^ @]*")]),
      passwd: new FormControl("", [Validators.required, this.passwordvalidation])
    });
  }

  onAutoFill() {
    this.formdata = new FormGroup({
      emailid: new FormControl("test@email.com", [Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern("[^ @]*@[^ @]*")]),
      passwd: new FormControl("test", [Validators.required, this.passwordvalidation])
    });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true }
    }
  }

  onClickSubmitr(formdata) { this.emailid = formdata.emailid; }

}
