import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../modules/content/content.module';
import { KanbanRoutingModule } from './kanban-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormModule } from '@app/modules/forms/form.module';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    DragDropModule,
    KanbanRoutingModule,
    ContentModule,
    FormModule
  ]
})
export class KanbanModule { }
