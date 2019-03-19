import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpicComponent } from './userpic/userpic.component';

@NgModule({
  declarations: [UserpicComponent],
  imports: [
    CommonModule
  ],
  exports: [UserpicComponent],
})
export class UserpicModule { }
