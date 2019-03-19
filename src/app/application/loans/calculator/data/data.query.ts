// Here queries to store

import { Injectable } from '@angular/core';
import { State, CalculatorResultStore } from './data.store';
import { CalculateResult } from './data.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class CalculatorResultQuery extends QueryEntity<State, CalculateResult> {

    // selectUiState$ = this.select(state => state.config);
    // lastVersion$ = this.select(state => state.config.lastVersion);
    // prevVersion$ = this.select(state => state.config.prevVersion);
    //  getCalculator = this.select(calculator => state.calculator[])
    selectHistory$ = this.selectAll();
    constructor(protected store: CalculatorResultStore) {
        super(store);
    }
}


// export const todosQuery = new CalculatorResultQuery(calculatorStore);
