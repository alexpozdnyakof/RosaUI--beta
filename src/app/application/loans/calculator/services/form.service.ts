import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http: HttpClient) { }

  public getRanges(): Observable<any> {
    return this._http.get(`${environment.endpoint}/loans/calculator/ranges`);
  }

  public getKeys(): Observable<any> {
    return this._http.get(`${environment.endpoint}/loans/calculator/keys`);
  }

  public calculate(data): Observable<any> {
    const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const _body = new HttpParams()
      .append('range', data.range)
      .append('type', data.type);
    return this._http.post(`${environment.endpoint}/loans/calculator/calculate`, _body, {headers: _headers});
  }
}
