// import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input() article:Article;

  constructor() { }

  ngOnInit() {
    
  }

}
