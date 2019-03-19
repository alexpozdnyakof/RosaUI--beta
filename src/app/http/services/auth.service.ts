import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {   }
    public login() {

      const body = new HttpParams();
      // .append('rb', rb);
      return this._http.get<any>(`${environment.auth}`)
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
            //  if (user.token) {
             //   console.log(user.token);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
              //    localStorage.setItem('token', user.token);
              // }
              console.log(user);
              return user.token;
          }));
  }
  public currentUser() {
    return this._http.get(`${environment.endpoint}/user/current`);
  }

  loginNTML() {
    return this._http.get<any>(`${environment.auth}`)
        .pipe(map(user => {
          console.log('auth token');
          console.log(user);
            // login successful if there's a jwt token in the response
            if (user.token) {
              console.log(user.token);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.token);
            }

            return user.token;
        }));
}

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }

}
