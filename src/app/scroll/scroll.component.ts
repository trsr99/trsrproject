import { Component, OnInit } from '@angular/core';
import { MyscrollserviceService } from '../myscrollservice.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  public albumdetails = [];
  constructor(private myservice: MyscrollserviceService) { }
  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.albumdetails = Array.from(Object.keys(data), k => data[k]);
      console.log(this.albumdetails);
    });
  }
}
