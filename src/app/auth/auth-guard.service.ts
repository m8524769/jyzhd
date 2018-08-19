import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, CanActivateChild,
  CanLoad, Route, Router
} from '@angular/router';
import { AuthService } from './auth.service';
import { AuthLoginComponent } from './auth-login/auth-login.component';

import { MatDialog } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService,
    public matDialog: MatDialog,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.check().subscribe(authenticated => {
      if (authenticated) {
        this.router.navigate([url]);
        this.authService.isLoggedIn = true;
        return true;
      } else {
        this.authService.authDialogRef = this.matDialog.open(AuthLoginComponent);
        this.authService.redirectUrl = url;
        return false;
      }
    })

  }

}
