import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { BrowserModule } from '@angular/platform-browser';
import { AppLoadModule } from './load/app-load/app-load.module';
import { LayoutModule } from './modules/layout/layout.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, } from './http/jwt.interceptor';
import { ErrorInterceptor } from './http/error.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { FormModule } from '@app/modules/forms/form.module';

import { ClipboardModule } from 'ngx-clipboard';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IndexedService } from './bstorage/indexed.service';
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { CdkModule } from './shared/cdk/cdk.module';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToastModule } from '@app/modules/overlay/toast/toast.module';


registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  AkitaNgDevtools.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppLoadModule,
    RouterModule,
    FormModule,
    HttpClientModule,
    CdkModule,
    ToastModule.forRoot(),
    SharedModule,
    LayoutModule,
    NavigationModule,
    ClipboardModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    IndexedService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {

  }
 }

