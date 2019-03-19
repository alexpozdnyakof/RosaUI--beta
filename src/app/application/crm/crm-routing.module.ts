import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandlebarComponent } from '@app/modules/layout/handlebar/handlebar/handlebar.component';
import { ProspectComponent } from './prospect/prospect/prospect.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'prospects',
        loadChildren: './portfolio/portfolio.module#PortfolioModule',
      },
      {
        path: 'list',
        loadChildren: './list/list.module#ListModule',
      },
      {
        path: 'client',
        children: [
          {
            path: ':id',
            component: ProspectComponent,
          },
        ]
      },
      {
        path: '',
        redirectTo: '/crm/prospects',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
