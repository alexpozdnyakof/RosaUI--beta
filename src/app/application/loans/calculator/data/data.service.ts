import { Injectable } from '@angular/core';
import {  ActiveState, ID,  noop, push, toggle, transaction } from '@datorama/akita';
import { CalculatorResultStore } from './data.store';
import { CalculatorResultQuery } from './data.query';
// import { CalculatorDataService } from './calculator-data.service';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { CalculateResult } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorStoryService {

  constructor(
    // private calculatorDataService: CalculatorDataService,
    private _calculatorStore: CalculatorResultStore,
    private _calculatorQuery: CalculatorResultQuery,
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

    public getCalculateHistory(userId): Observable<any> {
      const request = this._http.get(`${environment.endpoint}/loans/calculator/historylist/${userId}`).pipe(
        tap(data => console.log(data)),
        tap((data: CalculateResult[]) => this._calculatorStore.add(data))
      );
      return request;
    }

    /*
    public getState$(): Observable<any> {
        return this._calculatorQuery.selectUiState$;
    }
    */
   public addCalculateToStore(calculate) {
      console.log(calculate);
      const date = calculate.date.date;
      const calcdata = {
        ...calculate,
        date
      };
      console.log(date);
      console.log(calcdata);
      this._calculatorStore.add(calcdata);
   }
    public saveCalculate(result): Observable<any> {
      const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const _body = new HttpParams().append('result', JSON.stringify(result));
      return this._http.post(`${environment.endpoint}/loans/calculator/save`, _body, {headers: _headers});
    }

    public toggleActive(id: ID) {
      this._calculatorStore.toggleActive(id);
    }

}
