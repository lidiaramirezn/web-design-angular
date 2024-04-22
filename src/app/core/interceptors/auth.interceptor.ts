import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, switchMap, delay, retry} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ApiInfo } from '../services/api-info';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private authService: AuthService, private router:Router) {
	}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();
    const basicAuth = window.btoa('client_web:secret');
    console.debug(request.url);
    console.debug(token);

    if(!ApiInfo.isSecure(request.url)){
      console.debug("url is not secure");
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${basicAuth}`,'Content-type': 'application/json'
        }
      });
    }else{
      console.debug("url is secure");
      if (token){
        if(this.authService.isAuthenticated()) {
          request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token.access_token}`
          }
          });
        }else{
          console.debug("Try refreshing token");
        }
      }else{
        console.debug ("token is null");
        //this.router.navigate(["/login"]);
        this.authService.addFailedRequest(request);
        return EMPTY;
        //We should go to login.
      }
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 && !request.url.includes('oauth/token')) {
            this.authService.addFailedRequest(request);
            return this.handle401Error(request, next);
          }
          if(error.status == 404){
            // Api Error
          }

          if(error.status == 500){
            // Api Error Unknown error in the server
          }
        }
        return throwError(()=>error);
      })
     );
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
    console.debug("handle401Error ---");
    const token = this.authService.getToken();

    if(!token){
      //TODO improve it!
      //this.authService.logout(); // we should go to main page or sign in?
      //Observable.throw('Error message'); test this next time decide if is better than empty
      //return EMPTY;
    }

    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if(this.authService.exists() && !this.authService.isExpired()){
        // invalidate token. We could try to refresh. Review
        this.authService.logout();
      }else if(this.authService.exists() && this.authService.isExpired()){
        // refresh
        console.debug("Refreshing ---");
        return this.authService.refreshToken()
        .pipe(
          switchMap(token => {
            console.debug(token);
            this.authService.saveToken(token);
            this.isRefreshing = false;
            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;
            if (error.status == 401 || error.status == 400) {
              console.debug("refresh_token is expired too");
              //go to logout
              this.authService.logout();
            }
            if (error.status == 403) {
              console.debug("Got 403 error");
               // redirect user to the logout page
              //this.eventBusService.emit(new EventData('logout', null));
            }
            return throwError(() => error);
          })
        );
      }
    }

    return next.handle(request);
  }
}
