
import { Injectable, INJECTOR } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class authentificationGuard implements  CanActivate {

  constructor(private userService: UserService, private router: Router){

  }

  canActivate (_route: ActivatedRouteSnapshot,   _state: RouterStateSnapshot):  MaybeAsync<GuardResult> {

      if(this.userService.isAuthenticated==true){
        return true;
      }else{
        this.router.navigateByUrl("/login");
        return false;
      }

  
  }
  
}
