import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token.model';
import { Router } from '@angular/router';
import { UserModel } from '../models/user-request.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private http: HttpClient, private router:Router, private handler: HttpHandler) {

  }

  isAuthenticated(): boolean {
    console.debug("AuthService: isAuthenticated");
    const token = this.getToken();
    const currentTimeInMs = Date.now(); //new Date(new Date().valueOf()-5000);

    //console.debug("token ----");
    //console.debug(token);
    // TODO graceperiod = 5000 sec.

    if(token){
      if( (currentTimeInMs - token.created)/1000 < token.expires_in){
        return true;
      }
    }

    return false;
  }

  getToken(): Token | null {
    const token = localStorage.getItem('token');
    if(token)
      return JSON.parse(token);
    return null;
  }

  exists():boolean{
    if(this.getToken())
      return true;
    return false;
  }

  isExpired():boolean{
    const token = this.getToken();
    const currentTimeInMs = Date.now(); //new Date(new Date().valueOf()-5000);

    if(token){
      if( (currentTimeInMs - token.created)/1000 < token.expires_in){
        return false;
      }
    }
    return true;

  }

  saveToken(token: Token): void{
    console.debug("authService: saveToken");
    token.created = Date.now(); //milliseconds
    console.debug(token);
    localStorage.setItem('token', JSON.stringify(token));
  }

  login(queryParams: { username: string; password: string; }) {
    return this.http.post<Token>(
      `${environment.url}/oauth/token/?grant_type=password&username=${queryParams.username}&password=${queryParams.password}`,
      {}
    );
  }

  sendOTP(user:UserModel){
    return this.http.post<any>(`${environment.url}/setup/createOTP`, user);
  }

  checkOTP(user:UserModel){
    return this.http.post<any>(`${environment.url}/setup/checkOTP`, user);
  }

  checkIfExists(user:UserModel){
    return this.http.post<any>(`${environment.url}/setup/check`, user);
  }

  signup(user:UserModel){
    return this.http.post<any>(`${environment.url}/setup/signup`, user);
  }

  changePassword(request:UserModel){
		return this.http.post<any>(`${environment.url}/setup/changePassword`, request);
	}

  refreshToken() {
    console.debug("AuthService : refreshToken");
    let grant_type = "refresh_token";
    let refresh_token:any;

    refresh_token = this.getToken()?.refresh_token;

    return this.http.post<Token>(
      `${environment.url}/oauth/token/?grant_type=${grant_type}&refresh_token=${refresh_token}`,
      {}
    );
  }

  public addFailedRequest(request: HttpRequest<any>): void {
    this.cachedRequests.push(request);
  }
  public retryFailedRequests(): Observable<any>  {
    // retry the requests. this method can
    // be called after the token is refreshed

    return this.handler.handle(this.cachedRequests[0]).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          console.debug("HttpErrorResponse fired! ");
        }
        return throwError(()=>error);
      })
     );
  }

  logout() {
    console.debug("logout()");

    localStorage.removeItem('token');
    this.router.navigate(['/']);
    // Send the user back to the main page after logout
  }
}
