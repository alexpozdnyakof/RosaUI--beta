import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { RosaLabelDirective } from './rosa-label.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LabelComponent, RosaLabelDirective],
  exports: [LabelComponent, RosaLabelDirective]
})
export class LabelModule { }
