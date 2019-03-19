import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { ListHeaderCellModule } from './list-header-cell/list-header-cell.module';
import { ListBodyCellModule } from './list-body-cell/list-body-cell.module';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    ListHeaderCellModule,
    ListBodyCellModule
  ],
  declarations: [],
  exports: [
    CdkTableModule,
    ListHeaderCellModule,
    ListBodyCellModule
  ]
})
export class DataListModule { }
