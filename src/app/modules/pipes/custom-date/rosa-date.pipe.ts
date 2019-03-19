import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'rosaDate'
})
export class RosaDatePipe extends DatePipe implements PipeTransform {

  transform(date: number, args?: any): any {
    if (!date) { return; }
    const milliseconds = date * 1000;
    const dateFormat: string = new Date().getFullYear() === new Date(milliseconds).getFullYear() ? 'dd MMM HH:mm' : 'dd MMM yy HH:mm';
    return super.transform(milliseconds, dateFormat);
  }

}
