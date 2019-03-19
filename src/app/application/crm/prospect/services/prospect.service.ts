import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  constructor(private _http: HttpClient) {}



  public getProspect(prospectId): Observable<any> {
    const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      // .append('pageSize', `${pageSize}`);
    return this._http.get(`${environment.endpoint}/crm/customers/${prospectId}`,  {headers: _headers});
  }
  public getProspectTasks(prospectId): Observable<any> {
    const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      // .append('pageSize', `${pageSize}`);
    return this._http.get(`${environment.endpoint}/crm/customers/${prospectId}/tasks`,  {headers: _headers});
  }


 }
   // loadPortfolio(useId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

