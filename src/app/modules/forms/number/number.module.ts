import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number/number.component';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule
  ],
  declarations: [NumberComponent],
  exports: [NumberComponent]
})
export class NumberModule { }
