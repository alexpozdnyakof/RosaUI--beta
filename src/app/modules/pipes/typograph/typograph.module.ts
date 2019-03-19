import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographPipe } from './typograph.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TypographPipe],
  providers: [TypographPipe],
  exports: [TypographPipe]
})
export class TypographModule { }
