import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ArticleComponent} from './article/article.component';

const routes: Routes= [
  {path : 'articles',
  component:ArticleComponent}

]

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule {
 
}