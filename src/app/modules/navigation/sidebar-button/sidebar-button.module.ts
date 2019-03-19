import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarButtonComponent],
  exports: [SidebarButtonComponent]
})
export class SidebarButtonModule { }
