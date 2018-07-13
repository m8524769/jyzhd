import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { MatCardModule } from '@angular/material';
import { ArticleContentComponent } from './article-content/article-content.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [
    ArticleListComponent,
    ArticleContentComponent,
  ],
  exports: [
    ArticleListComponent,
  ]
})
export class ArticleModule { }
