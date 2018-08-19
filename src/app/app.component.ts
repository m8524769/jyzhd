import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Jyzhd-next';
  nickname: string = sessionStorage.getItem('nickname');
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  navItems: Object[] = [
    {
      title: 'Public notes',
      children: [
        {
          name: 'Dashboard',
          route: '/note/dashboard',
        },
        {
          name: 'My notes',
          route: '/note/mine',
        },
        {
          name: 'Create new note',
          route: '/note/create',
        },
      ]
    },
    {
      title: 'Fragmented knowledge',
      children: [
        {
          name: 'Discover',
          route: '/knowledge',
        },
        {
          name: 'My knowledge',
          route: '/knowledge/mine',
        },
        {
          name: 'Create something new',
          route: '/knowledge/create',
        },
      ]
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
  ) { }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.nickname = null;
      // Redirect
    });
  }

}
