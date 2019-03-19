// Here queries to store

import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { filter, map } from 'rxjs/operators';
import { CalculatorState, CalculatorStore } from './calculator.store';
export const initialValues = {
    collateral: {
        credit: [`100% денежное обеспечение`, `100 - 75% *`, `75 (включ) - 50% *`, `50 (включ) - 0% *`],
        overdraft: ['100 - 75% *', '75 (включ) - 50% *', '50 (включ) - 0% *', 'Без обеспечения']
    },
    amount: {
        micro: [`До 10 млн. руб. (включительно)`, `Свыше 10 млн. руб.`],
        small: [`До 10 млн. руб. (включительно)`, `От 10 до 20 млн. руб (включительно)`, `Свыше 20 млн. руб.`]
    }
};
@Injectable({
    providedIn: 'root'
})
export class CalculatorQuery extends Query<CalculatorState> {

    isSettingsReady$ = this.select(({ calculator }) => toBoolean(calculator));
    params$ = this.select(state => state);
    activeSettings$ = this.select(state => state).pipe(
        map(state => state.calculator)
    );
    constructor(protected store: CalculatorStore) {
        super(store);
    }

    public updateType(type) {
        console.log(type);
        this.store.update(state => ({
            calculator: {
                ...state.calculator,
                type,
            }
        }));
    }
    public updateSegment(segment) {
        this.store.update(state => ({
            calculator: {
                ...state.calculator,
                segment,
            }
        }));
    }
    isSettingsReady() {
        return toBoolean(this.getSnapshot().calculator);
    }
}
