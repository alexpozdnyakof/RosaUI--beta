import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as storage from './user.storage';
import { User, InitialUserState } from '@models/user/user.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<User> {
  constructor() {
    super(InitialUserState.create());
  }

  public currentUser() {
   return storage.currentUser();
  }
  public setUser(user: Partial<User>): Partial<User> {
    console.log(user);
    this.update(user);
    storage.saveUser(user);
    return this.currentUser();
  }
  public unsetUser() {
    storage.clearUser();
    this.update(InitialUserState.create());
  }
}
