import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { KnowledgeService } from '../shared/knowledge.service';

@Component({
  selector: 'app-knowledge-discover',
  templateUrl: './knowledge-discover.component.html',
  styleUrls: ['./knowledge-discover.component.css']
})
export class KnowledgeDiscoverComponent implements OnInit {

  page: Object[];

  constructor(
    private router: Router,
    private knowledgeService: KnowledgeService,
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage(page: number = 1, limit: number = 10): void {
    this.knowledgeService.getPage(page, limit)
      .subscribe(page => {
        this.page = page;
      });
  }

}
