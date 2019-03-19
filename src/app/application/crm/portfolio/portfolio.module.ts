import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { DataListModule } from '@app/modules/data-list/data-list.module';
import { PortfolioService } from './services/portfolio.service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LayoutModule } from '@app/modules/layout/layout.module';
import { SidebarButtonModule } from '@app/modules/navigation/sidebar-button/sidebar-button.module';
import { SidebarItemModule } from '@app/modules/navigation/sidebar-item/sidebar-item.module';
import { SidebarLinkModule } from '@app/modules/navigation/sidebar-link/sidebar-link.module';
import { Router, RouterModule } from '@angular/router';
import { PaginationModule } from '@app/modules/buttons/pagination/pagination.module';
import { TypographModule } from '@app/modules/pipes/typograph/typograph.module';
import { CustomDateModule } from '@app/modules/pipes/custom-date/custom-date.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    DataListModule,
    NgScrollbarModule,
    LayoutModule,
    SidebarItemModule,
    SidebarLinkModule,
    SidebarButtonModule,
    RouterModule,
    PaginationModule,
    TypographModule,
    CustomDateModule,
  ],
  providers: [
    PortfolioService
  ],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent]
})
export class PortfolioModule {
  constructor(router: Router) {

  }
}
