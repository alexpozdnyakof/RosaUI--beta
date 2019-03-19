// Here store operations
import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';
import { Calculator } from './calculator.model';


export interface CalculatorState {
    calculator: Calculator | null;
}

export function createCalculator(calculator: Calculator): Calculator {

    return { ...calculator };
}

export function createInitialState(): CalculatorState {
    return {
        calculator: null
    };
}



@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'calculator' })
export class CalculatorStore extends Store<CalculatorState> {

    constructor() {
        super(createInitialState());
    }



    setSettings(data: Calculator) {
        const calculator = createCalculator(data);
        this.update({calculator});
    }
    clearSettings() {
        this.update(createInitialState());
    }
}
