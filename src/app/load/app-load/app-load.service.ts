import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionsService } from '@store/sessions/sessions.service';
import { UserService } from '@store/user/user.service';
import { UserQuery } from '@store/user/user.query';
import { Observable } from 'rxjs';
// import { APP_SETTINGS } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(
    private httpClient: HttpClient,
    private _sessions: SessionsService,
    private _userService: UserService) { }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
          console.log(`initializeApp:: inside promise`);
          resolve();
        });
  }

  public getSettings(): Promise<any> {
    return this._sessions.login().toPromise().then(
      data =>  { this.getUser(); return data; },
    );
  }
  public getUser(): Promise<any> {
    return this._userService.setUser().toPromise().then(
      data =>  data,
    );
  }
}
