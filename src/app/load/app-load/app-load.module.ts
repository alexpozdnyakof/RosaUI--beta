import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoadService } from './app-load.service';
import { HttpClientModule } from '@angular/common/http';

export function init_app(appLoadService: AppLoadService) {
  console.log('load');
  return () => appLoadService.initializeApp();
}
export function get_settings(appLoadService: AppLoadService) {
  console.log('load');
  return () => appLoadService.getSettings();
}
export function get_user(appLoadService: AppLoadService) {
  console.log('load');
  return () => appLoadService.getUser();
}
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true },
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppLoadService], multi: true },
  ],
  declarations: []
})
export class AppLoadModule {


}
