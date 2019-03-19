import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule
  ],
  declarations: [RadioComponent],
  exports: [RadioComponent]
})
export class RadioModule { }
