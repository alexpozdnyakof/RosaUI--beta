import { Injectable, isDevMode } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionQuery } from '@app/store/sessions/sessions.query';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private token$: string;
    constructor( private authQuery: SessionQuery) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        this.authQuery.token$.subscribe(token => {
            // this.token$ = token;
            if (!token) {
                if (!isDevMode()) {
                    request = request.clone({
                        withCredentials: true
                    });
                }
            } else  {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        });
   /* const curre

       /* const currentUser = localStorage.getItem('token');
        if (currentUser) {
            console.log(currentUser);
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser}`
                }
            });
        }*/

        return next.handle(request);
    }
}




