import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as storage from './sessions.storage';
import { SessionState, SessionToken, InitialSessionState } from '@models/sessions/sessions.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionToken> {
  constructor() {
    super(InitialSessionState.create());
  }

  login(session: SessionToken) {
    this.update(session);
    console.log(session);
    storage.saveSession(session.token);
  }

  logout() {
    storage.clearSesssion();
    this.update(InitialSessionState.create());
  }
}
