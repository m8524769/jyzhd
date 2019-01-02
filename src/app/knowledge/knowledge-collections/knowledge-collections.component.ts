import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnowledgeService } from '../shared/knowledge.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-knowledge-collections',
  templateUrl: './knowledge-collections.component.html',
  styleUrls: ['./knowledge-collections.component.css']
})
export class KnowledgeCollectionsComponent implements OnInit {

  collections: Object[];

  constructor(
    private router: Router,
    private knowledgeService: KnowledgeService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getCollections();
  }

  getCollections(page: number = 1, limit: number = 10): void {
    this.knowledgeService.getCollections(this.authService.userId, page, limit)
      .subscribe(collections => {
        this.collections = collections;
      });
  }

}
