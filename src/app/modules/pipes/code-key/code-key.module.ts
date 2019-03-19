import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeKeyPipe } from './code-key.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodeKeyPipe],
  exports: [CodeKeyPipe],
})
export class CodeKeyModule { }
