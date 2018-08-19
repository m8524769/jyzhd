import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeService } from './knowledge.service';

import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeViewComponent } from './knowledge-view/knowledge-view.component';
import { KnowledgeEditorComponent } from './knowledge-editor/knowledge-editor.component';
import { KnowledgeMineComponent } from './knowledge-mine/knowledge-mine.component';
import { KnowledgeDiscoverComponent } from './knowledge-discover/knowledge-discover.component';

import { KnowledgeRoutingModule } from './knowledge-routing.module';

@NgModule({
  imports: [
    CommonModule,
    KnowledgeRoutingModule,
  ],
  declarations: [
    KnowledgeComponent,
    KnowledgeViewComponent,
    KnowledgeEditorComponent,
    KnowledgeMineComponent,
    KnowledgeDiscoverComponent,
  ],
  providers: [
    KnowledgeService
  ]
})
export class KnowledgeModule { }
