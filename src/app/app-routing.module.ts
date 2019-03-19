import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: `loans`,
    loadChildren: './application/loans/loans.module#LoansModule',
    // canLoad: [AuthGuard]
  },
  {
    path: `crm`,
    loadChildren: './application/crm/crm.module#CrmModule',
    // canLoad: [AuthGuard]
  },
  {
    path: `datatables`,
    loadChildren: './application/datatables/datatables.module#DatatablesModule',
    // canLoad: [AuthGuard]
  },
  {
    path: `kanban`,
    loadChildren: './application/kanban/kanban.module#KanbanModule',
    // canLoad: [AuthGuard]
  },
  { path: '',  redirectTo: 'loans' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
