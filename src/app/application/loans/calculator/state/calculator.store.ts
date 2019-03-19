// Here store operations
import { Injectable } from '@angular/core';
// import { ID, Store, StoreConfig } from '@datorama/akita';
import { Calculator } from './calculator.model';
import { applyTransaction, ActiveState } from '@datorama/akita';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';



export function createCalculator(calculator: Calculator): Calculator {

    return { ...calculator };
}


export interface CalculatorState extends EntityState<Calculator>, ActiveState {
    config: {
        type: | `credit` | `overdraft` | null;
        segment: | `micro` | `small` | null;
        collateral: string | null;
        amount: string | null;
        isPrevious: boolean | null;
        range: number | null;
        lastVersion: string;
        prevVersion: string;
    };
}

const initialState = {
    config: {
        type: null,
        segment: null,
        collateral: null,
        amount: null,
        isPrevious: null,
        range: null,
        lastVersion: null,
        prevVersion: null,
    }
  };

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'calculator' })
export class CalculatorStore extends EntityStore<CalculatorState, Calculator> {

    constructor() {
        super(initialState);
    }
    updateState(newState) {
        applyTransaction(() => {
        this.updateRoot(state => (
        {
            config: {
                ...state.config,
                ...newState
            }
         }));
        });
    }
}
export const calculatorStore = new CalculatorStore();
