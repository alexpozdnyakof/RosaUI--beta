import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeaderCellComponent } from './list-header-cell/list-header-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListHeaderCellComponent],
  exports: [ListHeaderCellComponent]

})
export class ListHeaderCellModule { }
