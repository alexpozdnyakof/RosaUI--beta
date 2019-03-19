import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private _http: HttpClient) { }

  public updateFtp(newFtp: any[], startDate: string): Observable<any> {
    const stringify = JSON.stringify(newFtp);
    const body = new HttpParams()
    .append('data', stringify)
    .append('startDate', startDate);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(`${environment.endpoint}/parsetable`, body, { headers: headers });
  }
}
