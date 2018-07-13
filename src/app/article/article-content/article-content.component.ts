import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  article: Article;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
  }

  getArticles(id:number): void {
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

}
