import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatableCreateComponent } from './datatable-create/datatable-create.component';


const routes: Routes = [
  {
    path: '',
    component: DatatableCreateComponent,
    children: [
      {
        path: ':id',
        component: DatatableCreateComponent,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {}

/*
  {
    outlet: 'handlebar',
    path: ':id',
    component: HandlebarComponent,
  },
  */
