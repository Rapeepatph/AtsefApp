import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// Add the RxJS Observable operators we need in this app.

import { BaseService } from './base.service';
import { Http,Headers, RequestOptions } from '@angular/http';
import { UserRegistration } from '../models/user.registration.interface';


@Injectable()

export class UserService extends BaseService {
  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();
  private loggedIn = false;


  constructor(private _http:Http) {
    super();

    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = '/api';
  }

  register(email: string, password: string, firstName: string, lastName: string,location: string): Observable<UserRegistration> {
    let body = JSON.stringify({ email, password, firstName, lastName,location });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.baseUrl + "/accounts", body, options)
      .map(res => true)
      .catch(this.handleError);
  }  

  login(userName, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post(
      this.baseUrl + '/auth/login',
      JSON.stringify({ userName, password }),{ headers }
      )
      .map(res => res.json())
      .map(res => {
        var resJson = JSON.parse(res);    //convert from string to Json
        localStorage.setItem('auth_token', resJson.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  public getToken(): string {
    return localStorage.getItem('auth_token');
  }
}
