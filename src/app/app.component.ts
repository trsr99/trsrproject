import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  myName = "T.Raja Sekhar Reddy";

  constructor() { }

  ngOnInit() {
  }

}