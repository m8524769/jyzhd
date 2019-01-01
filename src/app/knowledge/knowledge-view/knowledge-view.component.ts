import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Knowledge } from '../shared/knowledge.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { KnowledgeService } from '../shared/knowledge.service';

@Component({
  selector: 'app-knowledge-view',
  templateUrl: './knowledge-view.component.html',
  styleUrls: ['./knowledge-view.component.css']
})
export class KnowledgeViewComponent implements OnInit {

  knowledge$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private knowledgeService: KnowledgeService,
  ) { }

  ngOnInit() {
    this.knowledge$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.knowledgeService.getKnowledge(
          Number(params.get('id'))
        )
      )
    );
  }

}
