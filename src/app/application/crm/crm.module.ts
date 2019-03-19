import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './list/list.module';
import { CrmRoutingModule } from './crm-routing.module';
import { LayoutModule } from '@app/modules/layout/layout.module';
import { SidebarButtonModule } from '@app/modules/navigation/sidebar-button/sidebar-button.module';
import { ProspectModule } from './prospect/prospect.module';

@NgModule({
  imports: [
  CommonModule,
    ListModule,
    CrmRoutingModule,
    LayoutModule,
    SidebarButtonModule,
    ProspectModule
  ],
  declarations: []
})
export class CrmModule { }
