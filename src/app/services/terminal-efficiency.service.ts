import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TerminalEfficiencyService extends BaseService{

  constructor(private _http:HttpClient) {
    super();
   }
   

}
