import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarItemComponent],
  exports: [SidebarItemComponent]
})
export class SidebarItemModule { }
