import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { MatDialogRef, MatSnackBarRef, MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  userId: number = Number(sessionStorage.getItem('userId'));
  nickname: string = sessionStorage.getItem('nickname');

  redirectUrl: string;
  authDialogRef: MatDialogRef<any>;
  private authUrl = 'api/auth';

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
  ) { }

  check(): Observable<boolean> {
    return this.http.get<any>(`${this.authUrl}/check`).pipe(
      map(result => result.authenticated)
    )
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.authUrl}/login`, {
      email: email,
      password: password
    }).pipe(
      tap(response => {
        this.isLoggedIn = true;
        this.userId = response.id;
        this.nickname = response.nickname;
        this.storeUser();
      }),
      catchError(this.handleError<any>('Login'))
    );
  }

  register(email: string, password: string, nickname): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, {
      email: email,
      password: password,
      nickname: nickname,
    }).pipe(
      catchError(this.handleError<any>('Register'))
    );
  }

  storeUser(): void {
    sessionStorage.setItem('userId', String(this.userId));
    sessionStorage.setItem('nickname', this.nickname);
  }

  logout(): Observable<boolean> {
    return this.http.get<any>(`${this.authUrl}/logout`).pipe(
      tap(() => {
        this.isLoggedIn = false;
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('nickname');
        return of(true);
      }),
      catchError(this.handleError<any>('Logout'))
    )
  }

  private handleError<T>(operation = 'Operation', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.open(error.error, 'Got it');
      console.log(`${operation} failed: ${error.error}`);
      return of(result as T);
    };
  }

}
