import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Article } from './model/article';

@Injectable({
  providedIn: 'root',
})

export class ArticleService {

  constructor(
    private http: HttpClient,
  ) { }

  private url = 'api/article';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url)
      .pipe(
        catchError(this.handleError('getArticles', []))
      );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.url}/${id}`;
    return this.http.get<Article>(url).pipe(
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }



}