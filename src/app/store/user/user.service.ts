import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { UserStore } from '@store/user/user.store';
import { first, tap } from 'rxjs/operators';
import { User } from '@models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _auth: AuthService, private _store: UserStore ) { }
  public setUser() {
    return this._auth.currentUser().pipe(
      first(),
      tap(
        (user: Partial<User>) => {
          // token
          this._store.setUser(user);
        }
      )
    );
  }
}
