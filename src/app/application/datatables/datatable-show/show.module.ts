import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableShowComponent } from './datatable-show/datatable-show.component';
import { ShowRoutingModule } from './show-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShowRoutingModule
  ],
  declarations: [DatatableShowComponent]
})
export class ShowModule { }
