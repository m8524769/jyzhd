import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../model/note';
import { User } from '../../user/model/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  description: string;
  content: string;
  subject: string;
  readonly: boolean;
  author: User;

  constructor(
    private noteService: NoteService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.description = '';
    this.readonly = false;
  }

  commit() {
    const files = {
      "note.md": {
        "content": this.content
      }
    }
    this.noteService.createNote(new Note(
      this.description,files,this.subject,this.author,this.readonly
    )).subscribe(note => {
      if (note) {
        console.log(note);
        this.snackBar.open('创建成功！');
      }
    });
  }

}
