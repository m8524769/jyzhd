import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = 'api/note';

  constructor(
    private http: HttpClient,
  ) { }

  createNote(note: Note) {
    return this.http.post(this.url, note);
  }

}
