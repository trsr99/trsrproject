import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})

export class BasicsComponent implements OnInit {

  // declared array of months.
  months = ['January', "February", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  isavailable = false; //variable is set to true

  todaydate: Date;
  serviceproperty;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.serviceproperty = this.myservice.serviceproperty;
  }

  myClickFunction(e) {
    this.isavailable = !this.isavailable;
    alert("Button is clicked");
    console.log(e);
  }

  changemonths(a) {
    alert("Changed month from the Dropdown");
    console.log(a);
  }

}
