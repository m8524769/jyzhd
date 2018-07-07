import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root',
})

export class ArticleService {

  constructor(
    private http: HttpClient,
  ) { }

  private articleUrl = 'api/article';

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl).pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articleUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}