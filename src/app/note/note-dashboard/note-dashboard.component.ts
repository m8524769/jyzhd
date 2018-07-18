import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/model/user';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.css']
})
export class NoteDashboardComponent implements OnInit {

  user: User;
  recommendations$: any;
  searching: string;
  notes$: Observable<any>;
  private searchTerms = new Subject<string>();

  constructor(
    private noteService: NoteService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getInformation();
    this.getNotes('dashboard');
    this.notes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((keyword: string) =>
        this.noteService.getNotes(this.user, 'search', keyword)
      )
    );
  }

  search(keyword: string): void {
    this.searchTerms.next(keyword);
  }

  getNotes(type: string): void {
    this.noteService.getNotes(this.user, type)
      .subscribe(notes => {
        this.recommendations$ = notes;
      });
  }

}
