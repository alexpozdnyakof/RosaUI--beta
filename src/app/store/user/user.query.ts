import { Injectable } from '@angular/core';
import { Query, toBoolean, coerceArray } from '@datorama/akita';
import { User, InitialUserState } from '@models/user/user.model';
import { UserStore } from '@store/user/user.store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserQuery extends Query<User> {
   // isLoggedIn$ = this.select(state => toBoolean(state.token));
   user$: Observable<any> = this.select(state => state);
   name$ = this.select(state => state.name);
   userpic$ = this.select(state => state.avatar);
   rb$ = this.select(state => state.rb);
   id$ = this.select(state => state.id);
   // name$ = this.select(state => state.name);
   constructor(protected store: UserStore) {
     super(store);
   }
   hasPermission(permissions: string[] | string): Observable<boolean> {
    const asArray = coerceArray(permissions);
    return this.select(state => state.permissions).pipe(
      map(userPermissions =>
        asArray.every(current => userPermissions.includes(current))
      )
    );
  }
  hasRole(roles: string[] | string): Observable<boolean> {
    const asArray = coerceArray(roles);
    return this.select(state => state.roles).pipe(
      map(userRoles =>
        asArray.every(current => userRoles.includes(current))
      )
    );
  }


   // isLoggedIn() {
   //  return toBoolean(this.getSnapshot().token);
  // }
}
