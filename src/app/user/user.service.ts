import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './model/user';
import { tap, catchError } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private information: User;
  private userUrl = 'api/user';

  constructor(
    private http: HttpClient,
    private router: Router,
    public loginDialog: MatDialog,
  ) { }

  openLoginDialog() {
    // const dialogRef = this.loginDialog.open(UserLoginComponent);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.userUrl}/login`, {
      email: email,
      password: password
    }).pipe(
      catchError(this.handleError<User>('Login'))
    );
  }

  register(email: string, nickname: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.userUrl}/register`, {
      email: email,
      nickname: nickname,
      password: password
    }).pipe(
      catchError(this.handleError<User>('Register'))
    );
  }

  keep(user): void {
    this.information = user;
    sessionStorage.setItem('user_id', user.id);
    sessionStorage.setItem('nickname', user.nickname);
  }

  getInformation(): User {
    if (this.information) {
      return this.information;
    } else if (sessionStorage.getItem('user_id')) {
      const user: User = {
        id: parseInt(sessionStorage.getItem('user_id')),
        email: '',
        nickname: sessionStorage.getItem('nickname'),
        password: ''
      }
      return user;
    } else {
      this.router.navigateByUrl("user/login");
    }
  }

  logout(): void {
    this.information = null;
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('nickname');
    this.router.navigateByUrl("user/login");
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.error}`);
      return of(result as T);
    };
  }

}
