import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { DatatableCreateComponent } from './datatable-create/datatable-create.component';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule
  ],
  declarations: [DatatableCreateComponent]
})
export class CreateModule { }
