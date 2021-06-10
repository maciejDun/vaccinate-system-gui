import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  date!: string;

  constructor() {
  }

  formatDate(date: string) {
    // 2021-08-11T07:00:00
    let sliceEnd = date.indexOf("T");
    let dayMonthYear = date.slice(0, sliceEnd);
    let time = date.slice(sliceEnd + 1, date.length - 3);
    return dayMonthYear + ' ' + time;
    // 2021-08-11 07:00
  }
}
