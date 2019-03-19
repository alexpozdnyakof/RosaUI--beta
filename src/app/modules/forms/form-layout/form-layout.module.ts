import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormGroupComponent],
  exports: [FormGroupComponent]
})
export class FormLayoutModule { }
