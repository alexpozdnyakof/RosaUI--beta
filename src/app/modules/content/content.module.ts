import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { TaskModule } from './task/task.module';
import { UserpicModule } from './userpic/userpic.module';

@NgModule({
  imports: [
    CardModule,
    TaskModule,
    UserpicModule
  ],
  declarations: [],
  exports: [
    CardModule,
    TaskModule,
    UserpicModule
  ]
})
export class ContentModule { }
