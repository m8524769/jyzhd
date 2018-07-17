import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  subject: string;
  content: string;
  readonly: boolean;
  author: User;

  constructor(
    private router: Router,
    private noteService: NoteService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    // Todo: 获取 User
    this.readonly = false;
  }

  commit() {
    const files = {
      "note.md": {
        "content": this.content
      }
    }
    this.noteService.createNote(new Note(
      this.description,this.subject,this.author,files,this.readonly
    )).subscribe(response => {
      if (response) {
        console.log(response);
        let snackBarRef = this.snackBar.open('创建成功！', '查看我的笔记');
        snackBarRef.onAction().subscribe(() => {
          this.router.navigateByUrl("note/mine");
        })
      }
    });
  }

}
