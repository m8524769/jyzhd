import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { MatDialogRef, MatSnackBarRef, MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
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
      tap(() => this.isLoggedIn = true),
      catchError(this.handleError<any>('Login'))
    );
  }

  logout(): Observable<boolean> {
    return this.http.get<any>(`${this.authUrl}/logout`).pipe(
      tap(() => {
        this.isLoggedIn = false;
        return of(true);
      }),
      catchError(this.handleError<any>('Logout'))
    )
  }

  private handleError<T>(operation = 'Operation', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.open(error.error, 'Understand');
      console.log(`${operation} failed: ${error.error}`);
      return of(result as T);
    };
  }

}
