import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatableShowComponent } from './datatable-show/datatable-show.component';

const routes: Routes = [
  {
    path: '',
    component: DatatableShowComponent,
    children: [
      {
        path: ':id',
        component: DatatableShowComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
