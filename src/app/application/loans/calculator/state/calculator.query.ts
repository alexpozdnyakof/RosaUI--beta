// Here queries to store

import { Injectable } from '@angular/core';
import { CalculatorState, calculatorStore, CalculatorStore } from './calculator.store';
import { Calculator } from './calculator.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class CalculatorQuery extends QueryEntity<CalculatorState, Calculator> {

    selectUiState$ = this.select(state => state.config);
    lastVersion$ = this.select(state => state.config.lastVersion);
    prevVersion$ = this.select(state => state.config.prevVersion);
    //getCalculator = this.select(calculator => state.calculator[])
    constructor(protected store: CalculatorStore) {
        super(store);
    }
}


export const todosQuery = new CalculatorQuery(calculatorStore);
