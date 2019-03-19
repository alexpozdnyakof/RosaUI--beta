import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MockPortfolio } from '../data/mock-portofilo';
import { environment } from '@env/environment';
import { CustomerGroup } from '../models/group.model';
import { ProspectView } from '../models/portfolio.model';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private _http: HttpClient) {}


  public getPortfolioMockup(): Observable<ProspectView[]> {
     return of(MockPortfolio);
  }

  public getPortfolio(
    pageIndex = 1,
    group = 0,
    pageSize = 2,
    userid?: number,
    filter?: string,
    direction: ( `asc` | `desc` ) = 'asc',
  ): Observable<any> {
    const _headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      // .append('pageSize', `${pageSize}`);
    const apiRoute = group > 0 ? `groups/${group}` : `portfolio`;
    return this._http.get(`${environment.endpoint}/crm/workspace/${apiRoute}?page=${pageIndex}`,  {headers: _headers});
  }

  public getGroups(): Observable<any> {
    return this._http.get(`${environment.endpoint}/crm/workspace/groups`);
  }
 }
   // loadPortfolio(useId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

