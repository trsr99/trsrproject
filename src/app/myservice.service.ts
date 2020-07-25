import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = "Service Created";

  constructor() { }

  showTodayDate(): Date {
    let ndate = new Date();
    return ndate;
  }
}
