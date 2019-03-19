import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [],
  imports: [
    OverlayModule,
    PortalModule
  ],
  exports: [
    OverlayModule,
    PortalModule
  ]
})
export class CdkModule { }
