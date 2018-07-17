import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { User } from '../../user/model/user';

@Component({
  selector: 'app-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.css']
})
export class NoteDashboardComponent implements OnInit {

  user: User;
  notes: Object[];
  keywoard: string;

  constructor(
    private noteService: NoteService,
  ) { }

  ngOnInit() {
    this.user = new User('ath1278352@gmail.com', 'Tony', 'vosed843');
    this.notes = [];
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes(this.user, 'dashboard')
      .subscribe(response => {
        for (let i in response) {
          this.notes.unshift(response[i])
        }
      })
  }

}
