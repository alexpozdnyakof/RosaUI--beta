import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
