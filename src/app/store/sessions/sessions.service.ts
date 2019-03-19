import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { SessionStore } from '@store/sessions/sessions.store';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private _auth: AuthService, private _store: SessionStore ) { }
  public login() {
    return this._auth.login().pipe(
      first(),
      tap(
        (session) => {
          console.log(session);
          // token
          this._store.login({token: session});
        }
      )
    );
  }
  public logout() {
    this._auth.logout();
  }
}
