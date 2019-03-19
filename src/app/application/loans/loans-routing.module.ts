import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './calculator/calculator.module#CalculatorModule',
      },
      {
        path: 'calculator',
        loadChildren: './calculator/calculator.module#CalculatorModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoansRoutingModule {}
