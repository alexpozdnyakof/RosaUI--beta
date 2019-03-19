import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
    {
        path: '',
        loadChildren: './datatable-show/show.module#ShowModule',
    },
    {
        path: 'create',
        loadChildren: './datatable-create/create.module#CreateModule',
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatablesRoutingModule { }
