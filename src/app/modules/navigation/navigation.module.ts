import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './nav/nav.module';
import { LogoModule } from './logo/logo.module';
import { SidebarLinkModule } from './sidebar-link/sidebar-link.module';
import { SidebarButtonModule } from './sidebar-button/sidebar-button.module';
import { SidebarItemModule } from './sidebar-item/sidebar-item.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    LogoModule,
    SidebarLinkModule,
    SidebarButtonModule,
    SidebarItemModule
  ],
  declarations: [],
  exports: [
    NavModule,
    LogoModule,
    SidebarLinkModule,
    SidebarButtonModule,
    SidebarItemModule
  ]
})
export class NavigationModule { }
