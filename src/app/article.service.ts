// import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-article';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// @Injectable()
// export class ConfigService {
  
// }

@Injectable({
  providedIn: 'root',
})

export class ArticleService {
constructor(private http: HttpClient) { }
  

  getArticles():Observable<Article[]>{
    return of (ARTICLES);
  }
}
