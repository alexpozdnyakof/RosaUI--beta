import { Injectable } from '@angular/core';
import { CalculateResult } from './data.model';
import { EntityState, EntityStore, StoreConfig, MultiActiveState } from '@datorama/akita';

export interface State extends EntityState<CalculateResult>, MultiActiveState {}

const initState = {
  active: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'calculateresult' })
export class CalculatorResultStore extends EntityStore<State, CalculateResult> {
  constructor() {
    super(initState);
  }
}
