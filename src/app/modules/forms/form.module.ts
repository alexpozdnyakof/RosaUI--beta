import { NgModule } from '@angular/core';
import { FormSharedModule } from './form-shared/form-shared.module';
import { CardModule } from './card/card.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { FormLayoutModule } from './form-layout/form-layout.module';
import { HintModule } from './hint/hint.module';
import { InputModule } from '@app/modules/forms/input/input.module';
import { LabelModule } from './label/label.module';
import { SelectModule } from './select/select.module';
import { SuggestModule } from './suggest/suggest.module';
import { TextareaModule } from './textarea/textarea.module';
import { RadioModule } from './radio/radio.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NumberModule } from './number/number.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { SwitchModule } from './switch/switch.module';
import { IconinputModule } from './iconinput/iconinput.module';
@NgModule({
  imports: [
    CardModule,
    CheckboxModule,
    DropdownModule,
    FormLayoutModule,
    FormSharedModule,
    HintModule,
    InputModule,
    LabelModule,
    RadioModule,
    SelectModule,
    SuggestModule,
    TextareaModule,
    NumberModule,
    DatepickerModule,
    SwitchModule,
    IconinputModule
  ],
  declarations: [
    ClickOutsideDirective
  ],
  exports: [
    CardModule,
    CheckboxModule,
    DropdownModule,
    FormLayoutModule,
    FormSharedModule,
    HintModule,
    InputModule,
    LabelModule,
    RadioModule,
    SelectModule,
    SuggestModule,
    TextareaModule,
    NumberModule,
    DatepickerModule,
    SwitchModule,
    IconinputModule
  ],
})
export class FormModule { }
