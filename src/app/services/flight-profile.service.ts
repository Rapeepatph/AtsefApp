import { Injectable } from '@angular/core';

import { Http,RequestOptionsArgs, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FlightProfileService {

  constructor(private _http:Http) { }

  getFlightProfiles():Observable<any>{
    return this._http.get('/api/FlightProfiles')
                      .map(response =>{return response.json();});
                      
  }

}
