import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'JYZHD NEXT';
  nickname: string = 'Guest';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  navItems: Object[] = [
    {
      title: 'Fragmented Knowledge',
      expand: true,
      routes: [
        {
          name: 'Dashboard',
          path: '/knowledge',
        },
        {
          name: 'My Collections',
          path: '/knowledge/collections'
        },
        {
          name: 'Discover',
          path: '/knowledge/discover',
        },
        {
          name: 'Create Something New',
          path: '/knowledge/create',
        },
      ]
    },
    {
      title: 'Public Notes',
      expand: false,
      routes: [
        {
          name: 'Dashboard',
          path: '/note/dashboard',
        },
        {
          name: 'My Notes',
          path: '/note/mine',
        },
        {
          name: 'Create New Note',
          path: '/note/create',
        },
      ]
    },
    {
      title: 'Forums',
      expand: false,
      routes: [
        {
          name: 'All Topics',
          path: '/forums'
        },
        {
          name: 'Post New Thread',
          path: '/forums/post'
        },
      ]
    },
  ];

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
  ) { }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.nickname = 'Guest';
      this.router.navigateByUrl("/");
    });
  }

}
