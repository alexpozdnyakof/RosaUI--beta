import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { UserpicModule } from '../userpic/userpic.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    UserpicModule
  ],
  exports: [TaskComponent],
})
export class TaskModule { }
