import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';


export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
 
  
  const auth = inject(UserService);
  const token = auth.accessToken;

  // if(!req.url.includes("/api/users/login")){
  //   let newRequest = req.clone({
  //   headers: req.headers.set('Authorization','Bearer '+this.userService.accessToken)
  //   })
  //  return next(newRequest);
  // }else
  //   return next(req);
  // }


  if (!token) { 
    return next(req)
  }

  const headers = new HttpHeaders({
    Authorization: token
  })

  const newReq = req.clone({
    headers
  })

  return next(newReq)
}
