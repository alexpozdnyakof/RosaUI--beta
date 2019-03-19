import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowModule } from './datatable-show/show.module';
import { CreateModule } from './datatable-create/create.module';
import { FormModule } from '@app/modules/forms/form.module';

@NgModule({
  imports: [
  CommonModule,
    ShowModule,
    CreateModule,
    FormModule
  ],
  declarations: []
})
export class DatatablesModule { }
