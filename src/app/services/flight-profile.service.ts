import { Injectable } from '@angular/core';

import { Http, RequestOptionsArgs, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightProfileService extends BaseService {

  constructor(private _http:HttpClient) {
    super();
  }

  getFlightProfiles():Observable<any>{
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // let authToken = localStorage.getItem('auth_token');
    // headers.append('Authorization', `Bearer ${authToken}`);
    // return this._http.get('/api/FlightProfiles',{headers})
    //                   .map(response =>{return response.json();})
    //                   .catch(this.handleError);
    return this._http.get('/api/FlightProfiles')
    .map(response =>{return response;})
    .catch(this.handleError);                 
  }
  getTerminalByArrival(strtDate,endingDate,arrival):Observable<any>{
    return this._http.get('api/FlightProfiles/'+strtDate+'/'+endingDate+'/'+arrival)
    .map(response =>{return response;})
    .catch(this.handleError);  
  }
  getDetailTerminal(arrival,strtDate,endingDate,aircraft,runwayHeading,secondEntrySector):Observable<any>{
    if(runwayHeading==null||runwayHeading==''){
      runwayHeading='X';
    }
    return this._http.get('api/FlightProfiles/'+arrival+'/'+strtDate+'/'+endingDate+'/'+aircraft+'/'+runwayHeading+'/'+secondEntrySector)
    .map(response =>{return response;})
    .catch(this.handleError); 
  }

}
