import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarLinkComponent],
  exports: [SidebarLinkComponent]
})
export class SidebarLinkModule { }
