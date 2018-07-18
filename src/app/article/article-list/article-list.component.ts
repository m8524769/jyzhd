import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }


}
