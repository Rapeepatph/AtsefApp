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
  getGroupProfile():Observable<any>{
    return this._http.get('/api/GroupProfiles')
    .map(response =>{
      return response;
    })
    .catch(this.handleError); 
  }
  postGroupProfile(name:string,dateFrom,dateTo,status):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    let body = JSON.stringify({name,dateFrom,dateTo,status});
    return this._http.post('/api/GroupProfiles', body,httpOptions)
      .map(res => {
        return res;
      })
      .catch(this.handleError); 
  }
  upDateProfile(model){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    let body = JSON.stringify(model);
    return this._http.put('/api/GroupProfiles/'+model.id,body,httpOptions)
              .map(res=>{
                return res;
              }).catch(this.handleError); 
  }
  deleteProfile(row){
    return this._http.delete('/api/GroupProfiles/'+row.id)
    .map(response =>{
      return response;
    })
    .catch(this.handleError);
  }
  
  
  postGroupStatistic(model):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    let body = JSON.stringify(model);
    return this._http.post('/api/GroupStatistic',body ,httpOptions)
      .map(res => {
        return res;
      }).catch(this.handleError); 
  }

  

}
