import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GroupProfileService extends BaseService {
  baseUrl: string = '';
  
  constructor(private _http:HttpClient) { 
    super();
    this.baseUrl = '/api';
  }
  
  postGroupProfile(name:string,dateFrom,dateTo):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    let body = JSON.stringify({name,dateFrom,dateTo});
    return this._http.post('/api/GroupProfiles', body,httpOptions)
      .map(res => {
        console.log('return res',res);
        return res;
        
        
      })
      .catch(this.handleError);
  }

}
