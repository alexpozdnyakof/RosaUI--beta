import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosaDatePipe } from './rosa-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [RosaDatePipe],
  exports: [RosaDatePipe],
  declarations: [RosaDatePipe]
})
export class CustomDateModule { }
