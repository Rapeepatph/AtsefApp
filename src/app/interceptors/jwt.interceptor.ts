// src/app/auth/jwt.interceptor.ts

// ...
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public auth: UserService,private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do(
        (event:HttpEvent<any>)=>{
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        },
        (err:any)=>{
            if(err instanceof HttpErrorResponse){
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    this.router.navigate(['/login']);
                  }
            }
        }
    )
   
  }
}