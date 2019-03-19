import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerInputDirective } from './datepicker-input.directive';

@NgModule({
  declarations: [
    DatepickerComponent,
    DatepickerInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatepickerComponent,
    DatepickerInputDirective
  ],
  entryComponents: [DatepickerComponent],
})
export class DatepickerModule { }
