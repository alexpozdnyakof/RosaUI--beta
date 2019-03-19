import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlebarComponent } from './handlebar/handlebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HandlebarComponent],
  exports: [ HandlebarComponent ]
})
export class HandlebarModule { }
