import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { GroupsStore } from './groups.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GroupsService {

  constructor(private groupsStore: GroupsStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.groupsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.groupsStore.add(entity);
    // });
  }

}
