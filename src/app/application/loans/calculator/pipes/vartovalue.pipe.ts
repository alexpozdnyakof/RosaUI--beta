import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vartovalue'
})
export class VartovaluePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) { return; }
    switch (value) {
      case 'credit':
        return 'Кредит';
      case 'overdraft':
        return 'Овердрафт';
      default:
        return value;
    }
  }

}
