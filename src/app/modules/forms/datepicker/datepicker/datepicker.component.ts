import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef, EventEmitter, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'rosa-datepicker',
  templateUrl: './datepicker.component.pug',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, AfterViewInit {
  public localeString = 'ru';
  public navDate: any;
  public weekDaysHeaderArr: Array<string> = [];
  public gridArr: Array<any> = [];
  public selectedDate: any;
  public date;
  public selectedDay;
  @Output() selected = new EventEmitter<any>();
  constructor() {
    moment.locale(this.localeString);
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
       // this.container.element.nativeElement.focus();
    });
  }

  ngOnInit() {
    this.navDate = moment();
    this.makeHeader();
    this.makeGrid();
  }

  public dateFromNum(num: number, referenceDate: any): any {
    const returnDate = moment(referenceDate);
    // console.log(returnDate.date(num));
    const dateFormat = returnDate.date(num);
    return dateFormat;
  }

  public onClick(day: any) {
    const date = this.dateFromNum(day.value, this.navDate);
    const dateFormatted = date.format('YYYY-MM-DD');
    console.log(dateFormatted);

    this.selected.emit(dateFormatted);
    // this.setDate(dateFormatted);
    // this.params.api.stopEditing();
  }

  public selectDay(day: any): any {
    this.selectedDay = day;
      this.selectedDate = this.dateFromNum(day.value, this.navDate).format('YYYY-MM-DD');
      this.selected.emit(this.selectedDate);
    // if (day.available) {
    // }
  }




  public changeNavMonth(num: number): void {
    if (this.canChangeNavMonth(num))  {
      this.navDate.add(num, 'month');
      this.makeGrid();
    }
  }

  public canChangeNavMonth(num: number): boolean {
    const clonedDate = moment(this.navDate);
    clonedDate.add(num, 'month');
    const minDate = moment().add(-1, `year`);
    const maxDate = moment().add(1, `year`);
    return clonedDate.isBetween(minDate, maxDate);
  }

  public makeHeader(): void {
    const weekDaysArr: Array<number> = [0, 1, 2, 3, 4, 5, 6];
    weekDaysArr.forEach(day => this.weekDaysHeaderArr.push(moment().weekday(day).format('ddd')));
  }

  public isAvailable(num: number): boolean {
    const dateToCheck = this.dateFromNum(num, this.navDate);
    if (dateToCheck.isBefore(moment(), 'day')) {
        return false;
    } else {
        return true;
    }
  }

  public makeGrid(): void {
    this.gridArr = [];
    const firstDayDate = moment(this.navDate).startOf('month');
    const initialEmptyCells = firstDayDate.weekday();
    const lastDayDate = moment(this.navDate).endOf('month');
    const lastEmptyCells = 6 - lastDayDate.weekday();
    const daysInMonth = this.navDate.daysInMonth();
    const arrayLength = initialEmptyCells + lastEmptyCells + daysInMonth;

    for (let i = 0; i < arrayLength; i++) {
      const obj: any = {};
      if (i < initialEmptyCells || i > initialEmptyCells + daysInMonth - 1) {
        obj.value = 0;
        obj.available = false;
      } else {
        obj.value = i - initialEmptyCells + 1;
        obj.available = this.isAvailable(i - initialEmptyCells + 1);
      }
      this.gridArr.push(obj);
    }
  }

}
