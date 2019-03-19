import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionState, SessionToken } from '@models/sessions/sessions.model';
import { SessionStore } from './sessions.store';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends Query<SessionToken> {
   isLoggedIn$ = this.select(state => toBoolean(state.token));
   token$ = this.select(state => state.token);
   // name$ = this.select(state => state.name);
   constructor(protected store: SessionStore) {
     super(store);
   }

   isLoggedIn() {
     return toBoolean(this.getSnapshot().token);
   }
}
