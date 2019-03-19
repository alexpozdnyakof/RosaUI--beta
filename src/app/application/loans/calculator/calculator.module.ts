import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConfigComponent } from './config/config.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { FormModule } from '@app/modules/forms/form.module';
import { ButtonModule } from '@app/modules/buttons/button/button.module';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { VartovaluePipe } from './pipes/vartovalue.pipe';
import { FormService } from './services/form.service';
import { TooltipModule } from '@app/modules/overlay/tooltip/tooltip.module';
@NgModule({
  imports: [
  CommonModule,
    CalculatorRoutingModule,
    FormModule,
    ButtonModule,
    TooltipModule
  ],
  declarations: [
    CalculatorComponent,
    ConfigComponent,
    StoryCardComponent,
    VartovaluePipe,
    OrderByPipe],
  exports: [CalculatorComponent, ConfigComponent],
  providers: [
    FormService
  ]
})
export class CalculatorModule { }
