import { Injectable } from '@angular/core';
import { noop, ID } from '@datorama/akita';
import { CalculatorStore } from './calculator.store';
import { CalculatorQuery } from './calculator.query';
// import { CalculatorDataService } from './calculator-data.service';
import { Calculator } from './calculator.model';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    // private calculatorDataService: CalculatorDataService,
    private _calculatorStore: CalculatorStore,
    private _calculatorQuery: CalculatorQuery
  ) { }

  // getStudents(): Observable<Array<Calculator>> {
    /*
    const request = this.studentDataService.getStudents().pipe(
      tap(s => this.studentStore.set(s))
    );
    */
  //  return this.studentQuery.isPristine ? request : noop(); // request
  // }




    public updateState$(type): void {
      //  return this._calculatorQuery.updateState(type);
    }
    public getState$(): Observable<any> {
        return this._calculatorQuery.params$;
    }
    public setSettings(settings: Calculator): any {
        return this._calculatorStore.setSettings(settings);
    }
    public getSettings$(): Observable<Calculator> {
        return this._calculatorQuery.activeSettings$;
    }

}
