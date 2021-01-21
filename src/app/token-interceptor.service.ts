import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next){
    let token = 'YWRtaW46YWRtaW4=';
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
