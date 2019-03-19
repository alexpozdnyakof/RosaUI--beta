import { Injectable } from '@angular/core';
import { Store, StoreConfig, transaction } from '@datorama/akita';

export interface PortfolioState {
  pages: number;
  current: number;
  name: string;
  id: number;
}

export function createInitialState(): PortfolioState {
  return {
    pages: 0,
    current: 0,
    name: '',
    id: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'portfolio' })
export class PortfolioStore extends Store<PortfolioState> {

  constructor() {
    super(createInitialState());
  }

/*
  @transaction()
  addNewPizza() {
    const newPizza = createPizza();
    this.add(newPizza);
    this.setActive(newPizza.id);
  }
  */
  public setPortfolioState(state: Partial<PortfolioState>) {
    // this.updateRoot(state);
  }

}

