import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormSharedModule } from '../form-shared/form-shared.module';
import { ListComponent } from './list/list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    FormSharedModule,
    NgScrollbarModule
  ],
  declarations: [DropdownComponent, ListComponent],
  exports: [DropdownComponent, ListComponent]
})
export class DropdownModule { }
