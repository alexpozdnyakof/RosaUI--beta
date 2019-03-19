import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GroupsStore, GroupsState } from './groups.store';
import { Group } from './group.model';

@Injectable({ providedIn: 'root' })
export class GroupsQuery extends QueryEntity<GroupsState, Group> {

  constructor(protected store: GroupsStore) {
    super(store);
  }

}
