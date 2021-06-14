import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  date!: string;

  constructor() {
  }

  formatDateForView(date: string) {
    // input 2021-08-11T07:00:00
    let sliceEnd = date.indexOf("T");
    let dayMonthYear = date.slice(0, sliceEnd);
    let time = date.slice(sliceEnd + 1, date.length - 3);
    return dayMonthYear + ' ' + time;
    // output 2021-08-11 07:00
  }

  formatDateForSave(date: string) {
    // input 2021-08-11 07:00
    let sliceEnd = date.indexOf(" ");
    let dayMonthYear = date.slice(0, sliceEnd);
    let time = date.slice(sliceEnd + 1, date.length);
    return dayMonthYear + 'T' + time;
    // output 2021-08-11T07:00:00
  }
}
