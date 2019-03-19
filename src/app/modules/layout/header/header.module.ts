import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, TopComponent, SubComponent],
  exports: [HeaderComponent, TopComponent, SubComponent]
})
export class HeaderModule { }
