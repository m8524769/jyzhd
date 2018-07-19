import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/model/user';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.css']
})
export class NoteDashboardComponent implements OnInit {

  user: User;
  recommendations: any;
  searching: string;
  notes$: Observable<any>;
  private searchTerms = new Subject<string>();

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
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
    this.noteService.clearId();
  }

  search(keyword: string): void {
    this.searchTerms.next(keyword);
  }

  getNotes(type: string): void {
    this.noteService.getNotes(this.user, type)
      .subscribe(notes => {
        this.recommendations = notes;
      });
  }

  gistPage(gistId: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`/api/note/${gistId}`)
  }

  modify(gistId: string): void {
    this.noteService.keep(gistId);
    this.router.navigateByUrl("note/editor");
  }

}
