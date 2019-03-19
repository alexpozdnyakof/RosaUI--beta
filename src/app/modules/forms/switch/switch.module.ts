import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule
  ],
  declarations: [SwitchComponent],
  exports: [SwitchComponent]
})
export class SwitchModule { }
