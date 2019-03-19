import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectComponent } from './prospect/prospect.component';
import { TypographModule } from '@app/modules/pipes/typograph/typograph.module';
import { CustomDateModule } from '@app/modules/pipes/custom-date/custom-date.module';
import { CodeKeyModule } from '@app/modules/pipes/code-key/code-key.module';

@NgModule({
  imports: [
    CommonModule,
    TypographModule,
    CustomDateModule,
    CodeKeyModule
  ],
  declarations: [ProspectComponent],
  exports: [ProspectComponent],
})
export class ProspectModule { }
