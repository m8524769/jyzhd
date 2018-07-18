import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './model/note';
import { User } from '../user/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl = 'api/note';
  private userUrl = 'api/user';

  constructor(
    private http: HttpClient,
  ) { }

  createNote(note: Note): Observable<any> {
    return this.http.post(this.noteUrl, note);
  }

  getNotes(user: User, type: string, keyword: string = ''): Observable<any> {
    if (type == 'dashboard') {
      return this.http.get(`${this.noteUrl}/public`);
    } else if (type == 'search' && keyword) {
      return this.http.get(`${this.noteUrl}/search?keyword=${keyword}`);
    } else if (type == 'mine') {
      return this.http.get(`${this.userUrl}/${user.id}/notes`);
    } else {
      return new Observable();
    }
  }

}
