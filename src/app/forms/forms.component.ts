import { Component, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { SelectorContext } from '@angular/compiler';
import { Params } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  emailid:string;
  passwd:string;

  constructor() { }

  ngOnInit() {
    this.emailid = "test@email.com";
    this.passwd = "test";
  }

  onClickSubmit(data) {
     alert("Email id : " + data.emailid);
  }

  myClickFunction(data) {
    data.reset();
  }

  onAutoFill() {
    this.emailid = "test@email.com";
    this.passwd = "test";
  }

}
