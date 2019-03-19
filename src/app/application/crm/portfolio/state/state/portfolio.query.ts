import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PortfolioStore, PortfolioState } from './portfolio.store';

@Injectable({ providedIn: 'root' })
export class PortfolioQuery extends Query<PortfolioState> {
  portfolioState$ = this.select(state => state);
  pages$ = this.select(state => state.pages);
  current$ = this.select(state => state.current);
  name$ = this.select(state => state.name);
  groupId$ = this.select(state => state.id);
  constructor(protected store: PortfolioStore) {
    super(store);
  }
  public add(state: Partial<PortfolioState>) {
    this.store.update(state);
  }
}
