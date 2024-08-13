// import { HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { UserService } from '../services/user/user.service';




import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = localStorage.getItem('token');
    if (token) {
     const req = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + token)
  });
      return next.handle(req);
    }
    return next.handle(request);
  }
}

// export function authInterceptor( req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
 
  
  // const auth = inject(UserService);
  // const authToken = auth.getToken();

  //const token = auth.accessToken;
  
  // if(!req.url.includes("/api/users/login")){
  //   let newRequest = req.clone({
  //               setHeaders: {
  //                   Authorization: "Bearer " + authToken
  //               }
  //           });
  //           return next(newRequest);
  //    }
  //   else
  //   return next(req);
  // }


  ///////////////////////////////////////////////

  // if(!req.url.includes("/api/users/login")){
  //   // const authToken = auth.getToken();
  //   let newRequest = req.clone({
  //   headers: req.headers.set('Authorization','Bearer '+ authToken)
  //   })
  //  return next(newRequest);
  // }else
  //   return next(req);
  // }

  ////////////////////////////////////////////////
//   if (!authToken) { 
//     return next(req)
//   }

//   const headers = new HttpHeaders({
//     Authorization: authToken
//   })

//   const newReq = req.clone({
//     headers
//   })

//   return next(newReq)
// }

// @Injectable()
// export class authInterceptor implements HttpInterceptorFn {
//     constructor(private userService: UserService) { }
//     intercept(req: HttpRequest<any>, next: HttpHandler) {
//         const authToken = this.userService.getToken();
//         req = req.clone({
//             setHeaders: {
//                 Authorization: "Bearer " + authToken
//             }
//         });
//         return next.handle(req);
//     }
// }
