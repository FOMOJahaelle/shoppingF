

import { HttpEvent,HttpHandler,HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable()

export class appHttpInterceptor implements HttpInterceptor {

constructor ( private userService: UserService){

}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("****");
    console.log(request.url);

    if(!request.url.includes("/api/users/login")){
    let newRequest = request.clone({
    headers: request.headers.set('Authorization','Bearer '+this.userService.accessToken)
    })
   return next.handle(newRequest);
  }else
    return next.handle(request);
  }


  
}
