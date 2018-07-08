import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [
    ArticleListComponent,
  ],
  exports: [
    ArticleListComponent,
  ]
})
export class ArticleModule { }
