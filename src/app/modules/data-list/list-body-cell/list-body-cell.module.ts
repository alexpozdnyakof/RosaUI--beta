import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBodyCellComponent } from './list-body-cell/list-body-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListBodyCellComponent],
  exports: [ListBodyCellComponent]

})
export class ListBodyCellModule { }
