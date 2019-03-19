import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';
import { RosainputDirective } from './input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule,
    TextMaskModule
  ],
  declarations: [InputComponent, RosainputDirective],
  exports: [ InputComponent, RosainputDirective ],
})
export class InputModule { }
