import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PaginationModule
  ],
  declarations: [],
  exports: [ButtonModule]
})
export class ButtonsModule { }
