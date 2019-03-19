import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PortfolioStore, PortfolioState } from './portfolio.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PortfoliostateService {

  constructor(private _portfolioStore: PortfolioStore,
              private _http: HttpClient) {
  }

  get(entities) {
   // this._portfolioStore.select(entities);
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.portfolioStore.set(entities);
    // });
  }

  public add(state: Partial<PortfolioState>) {
    this._portfolioStore.update(state);
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.portfolioStore.add(entity);
    // });
  }

}
