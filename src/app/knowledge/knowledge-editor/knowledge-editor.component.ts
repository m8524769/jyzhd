import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnowledgeService } from '../shared/knowledge.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Knowledge } from '../shared/knowledge.model';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-knowledge-editor',
  templateUrl: './knowledge-editor.component.html',
  styleUrls: ['./knowledge-editor.component.css']
})
export class KnowledgeEditorComponent implements OnInit {

  title: string;
  description: string;
  content: string;
  author: number;

  constructor(
    private router: Router,
    private knowledgeService: KnowledgeService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  create(): void {
    this.knowledgeService.create(
      new Knowledge(
        this.title,
        this.description,
        this.content,
        this.authService.userId,
      )
    ).subscribe(response => {
      if (response) {
        let snackBarRef = this.snackBar.open('Created Successfully!', 'Got it');
        snackBarRef.onAction().subscribe(() => {
          this.router.navigateByUrl("knowledge");
        })
      }
    })
  }

}
