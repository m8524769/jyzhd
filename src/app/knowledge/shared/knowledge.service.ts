import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Knowledge } from './knowledge.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  private knowledgeUrl = 'api/knowledge';

  constructor(
    private http: HttpClient,
  ) { }

  getKnowledge(id: number): Observable<any> {
    return this.http.get(`${this.knowledgeUrl}/${id}`);
  }

  getPage(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.knowledgeUrl}`, {
      params: new HttpParams()
        .set('page', String(page))
        .set('limit', String(limit))
    });
  }

  search(keyword: string, page: number, limit: number) {
  }

  create(knowledge: Knowledge): Observable<any> {
    return this.http.post(this.knowledgeUrl, knowledge);
  }
}
