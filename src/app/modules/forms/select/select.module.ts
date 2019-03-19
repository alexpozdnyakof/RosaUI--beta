import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';
import { RosaselectDirective } from './rosaselect.directive';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule
  ],
  declarations: [SelectComponent, RosaselectDirective],
  exports: [SelectComponent, RosaselectDirective]
})
export class SelectModule { }
