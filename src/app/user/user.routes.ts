import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const userRoutes: Routes = [
  {
    path: 'user',
    redirectTo: '/user/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user/dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'user/login',
    component: UserLoginComponent
  },
  {
    path: 'user/notes',
    redirectTo: 'note/mine'
  },
]
