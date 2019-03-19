import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CalculatorComponent,
      },
      {
        path: 'config',
        component: ConfigComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule {}
