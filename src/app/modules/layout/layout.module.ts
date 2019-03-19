import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { HandlebarModule } from './handlebar/handlebar.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    HandlebarModule
  ],
  declarations: [],
  exports: [
    HeaderModule,
    SidebarModule,
    HandlebarModule
  ]
})
export class LayoutModule { }
