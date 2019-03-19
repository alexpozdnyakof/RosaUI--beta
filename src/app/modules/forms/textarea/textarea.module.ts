import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea/textarea.component';
import { FormSharedModule } from '@app/modules/forms/form-shared/form-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule
  ],
  declarations: [TextareaComponent],
  exports: [TextareaComponent]
})
export class TextareaModule { }
