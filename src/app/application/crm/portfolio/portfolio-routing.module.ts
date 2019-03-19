import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HandlebarComponent } from '@app/modules/layout/handlebar/handlebar/handlebar.component';
import { ProspectComponent } from '../prospect/prospect/prospect.component';

const routes: Routes = [


  {
    path: '',
    component: PortfolioComponent,
    children: [

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}

/*
  {
    outlet: 'handlebar',
    path: ':id',
    component: HandlebarComponent,
  },
  */
