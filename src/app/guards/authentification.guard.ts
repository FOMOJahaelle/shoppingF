
import { inject, Injectable, INJECTOR } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })




export const authentificationGuard: CanActivateFn = (_route, _state) => {

  const authService = inject(UserService);
  const router = inject(Router);
  
  if(authService.isLoggedIn()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
  
};

// export class authentificationGuard implements  CanActivate {

//   constructor(private userService: UserService, private router: Router){

//   }

//   // canActivate (_route: ActivatedRouteSnapshot,   _state: RouterStateSnapshot):  MaybeAsync<GuardResult> {

//   //     if(this.userService.isAuthenticated==true){
//   //       return true;
//   //     }else{
//   //       this.router.navigateByUrl("/login");
//   //       return false;
//   //     }

//   canActivate(
//     _next: ActivatedRouteSnapshot,
//     _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.userService.isLoggedIn !== true) {
//       window.alert("Access not allowed!");
//       this.router.navigateByUrl("/login")
//     }
//     return true;
//   }
//   }
  

