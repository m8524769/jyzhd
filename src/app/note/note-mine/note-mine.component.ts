import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../model/note';
import { User } from '../../user/model/user';

@Component({
  selector: 'app-note-mine',
  templateUrl: './note-mine.component.html',
  styleUrls: ['./note-mine.component.css']
})
export class NoteMineComponent implements OnInit {

  user: User;
  notes: Object[];

  constructor(
    private noteService: NoteService,
  ) { }

  ngOnInit() {
    this.user = new User('ath1278352@gmail.com', 'Tony', 'vosed843');
    this.notes = [];
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes(this.user, 'mine')
      .subscribe(response => {
        for (let i in response) {
          this.notes.unshift(response[i])
        }
      })
  }

}
