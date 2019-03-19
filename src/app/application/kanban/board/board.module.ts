import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '@app/modules/content/content.module';
import { CardModule } from '../../../modules/forms/card/card.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { FormModule } from '@app/modules/forms/form.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
  CommonModule,
    BoardRoutingModule,
    ContentModule,
    FormModule,
    CardModule,
    DragDropModule
  ]
})
export class BoardModule { }
