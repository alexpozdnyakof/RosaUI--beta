import { Injectable } from '@angular/core';
import {  ActiveState, ID,  noop, push, toggle, transaction } from '@datorama/akita';
import { CalculatorStore } from './calculator.store';
import { CalculatorQuery } from './calculator.query';
// import { CalculatorDataService } from './calculator-data.service';
import { Calculator, createCalculator } from './calculator.model';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    // private calculatorDataService: CalculatorDataService,
    private _calculatorStore: CalculatorStore,
    private _calculatorQuery: CalculatorQuery,
    private _http: HttpClient
  ) { }

  // getStudents(): Observable<Array<Calculator>> {
    /*
    const request = this.studentDataService.getStudents().pipe(
      tap(s => this.studentStore.set(s))
    );
    */
  //  return this.studentQuery.isPristine ? request : noop(); // request
  // }



    public calculateScore(state): Observable<any> {
      const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const _body = new HttpParams().append('config', JSON.stringify(state));
      return this._http.post(`${environment.endpoint}/loans/calculator/calculate`, _body, {headers: _headers}).pipe(
        tap(data => {
          const newCalculator = createCalculator(data);
          this._calculatorStore.add(newCalculator);
          //this._calculatorStore.setActive(newCalculator);
        })
      );
    }
    public lastRevision(): Observable<any> {
      const request = this._http.get(`${environment.endpoint}/loans/calculator/revision`).pipe(
        tap(data => this._calculatorStore.updateState(data))
      );
      return request;
    }
    public calculate(): Observable<any> {
      const request = this._http.get(`${environment.endpoint}/loans/calculator/revision`).pipe(
        tap(data => this._calculatorStore.add(createCalculator(data)))
      );
      return request;
    }

    public updateState(state): void {
        return this._calculatorStore.updateState(state);
    }
    public getState$(): Observable<any> {
        return this._calculatorQuery.selectUiState$;
    }


    public saveCalculate(result): Observable<any> {
      const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const _body = new HttpParams().append('result', JSON.stringify(result));
      return this._http.post(`${environment.endpoint}/loans/calculator/save`, _body, {headers: _headers});
    }

}
