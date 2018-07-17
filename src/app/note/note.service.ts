import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './model/note';
import { User } from '../user/model/user';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl = 'api/note';
  private userUrl = 'api/user';

  constructor(
    private http: HttpClient,
  ) { }

  createNote(note: Note) {
    return this.http.post(this.noteUrl, note);
  }

  getNotes(user: User, type: string) {
    if (type == 'dashboard') {
      return this.http.get(`${this.noteUrl}/public`);
    } else if (type == 'mine') {
      return this.http.get(`${this.userUrl}/${user.id}/notes`);
    }
  }

}
