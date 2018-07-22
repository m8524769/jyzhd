import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { UserService } from '../../user/user.service';
import { Note } from '../model/note';
import { User } from '../../user/model/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  gistId: string;
  description: string;
  subject: string;
  content: string;
  readonly: boolean;
  user: User;

  constructor(
    private router: Router,
    private noteService: NoteService,
    private userService: UserService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.user = this.userService.getInformation();
    this.gistId = this.noteService.getId();
    this.readonly = false;
    if (this.gistId) {
      this.noteService.getInformation()
        .subscribe(information => {
          this.description = information.description;
          this.subject = information.subject;
          this.readonly = information.readonly;
        });
      this.noteService.getNote()
        .subscribe(note => {
          this.content = note.content;
        });
    }
  }

  modify(): void {
    const files = {
      "note.md": {
        "content": this.content
      }
    };
    this.noteService.modifyNote(this.description, this.subject, files)
      .subscribe(() => {
        let snackBarRef = this.snackBar.open('修改成功！', '返回');
        snackBarRef.onAction().subscribe(() => {
          this.router.navigateByUrl("note/dashboard");
        })
      })
  }

  commit(): void {
    const files = {
      "note.md": {
        "content": this.content
      }
    };
    this.noteService.createNote(new Note(
      this.description,this.subject,this.user,files,this.readonly
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
