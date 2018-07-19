import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { UserService } from '../../user/user.service';
import { Note } from '../model/note';
import { User } from '../../user/model/user';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-note-mine',
  templateUrl: './note-mine.component.html',
  styleUrls: ['./note-mine.component.css']
})
export class NoteMineComponent implements OnInit {

  user: User;
  notes: Object[];

  constructor(
    private sanitizer: DomSanitizer,
    private noteService: NoteService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getInformation();
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

  gistPage(gistId: string) {
    return this.sanitizer.bypassSecurityTrustUrl(`/api/note/${gistId}`);
  }

}
