import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = '大学生 | 解忧杂货店';
  nickname: string = sessionStorage.getItem('nickname');
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  tags: Object[] = [
    {
      name: "公共学习笔记",
      path: "/note"
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
  ) { }

  logout(): void {
    this.userService.logout();
  }

}
