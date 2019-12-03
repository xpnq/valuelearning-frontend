import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { User, UserAccess } from "./user";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class UserEntryService {
  constructor(private http: HttpClient) { }
  private authenticationApi = environment.authenticationApi;
  private accountsApi = environment.accountsApi;

  public checkLoginCredentials(user: User) {
    let data = {
      username: user.username,
      password: user.password
    };
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let loginCredentialUrl = `${this.authenticationApi}/v1/login`;
    return this.http
      .post<any>(loginCredentialUrl, data, requestOptions)
      .pipe(
        map(response => {
          // console.log('login response', response);
          if (response && response.jwtString) {
            localStorage.setItem('userAccess', JSON.stringify(response));
          }
          return response;
        }),
        catchError(this.handleError()));
  }


  public registerUser(userDetails: any) {
    let data = {
      firstname: userDetails.firstname,
      email: userDetails.email,
      password: userDetails.password,
      surname: userDetails.surname
    };
    // console.log(data);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    let registrationUrl = `${this.accountsApi}/v1/user`;
    return this.http
      .post(registrationUrl, data, requestOptions)
      .pipe(catchError(this.handleError()));
  }

  public sendPasswordResetLink(user: User) {
    let data = {
      email: user.username
    };
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let resetPasswordUrl = `${this.accountsApi}/v1/user/${user.username}/reset`;
    return this.http
      .post(resetPasswordUrl, data, requestOptions)
      .pipe(catchError(this.handleError()));
  }

  public resetPassword(username: string, password: string){
    let resetPasswordUrl = `${this.accountsApi}/v1/user/${username}/auth`;

    let data = {
      email: username
    };
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http
    .post(resetPasswordUrl, data, requestOptions)
    .pipe(catchError(this.handleError()));
  }

  public getUserDetails(username){
    let userDetailsUrl = `${this.accountsApi}/v1/user/${username}`;
    let currentUserAccess: string = localStorage.getItem('userAccess');
    let userAccess: UserAccess;
    if(currentUserAccess != null || currentUserAccess != ''){
      userAccess = JSON.parse(currentUserAccess);
    }
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http
    .get(userDetailsUrl, requestOptions)
    .pipe(catchError(this.handleError()));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
