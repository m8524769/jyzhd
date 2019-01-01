import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KnowledgeService } from './shared/knowledge.service';

import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeDashboardComponent } from './knowledge-dashboard/knowledge-dashboard.component';
import { KnowledgeCollectionsComponent } from './knowledge-collections/knowledge-collections.component';
import { KnowledgeViewComponent } from './knowledge-view/knowledge-view.component';
import { KnowledgeEditorComponent } from './knowledge-editor/knowledge-editor.component';
import { KnowledgeMineComponent } from './knowledge-mine/knowledge-mine.component';
import { KnowledgeDiscoverComponent } from './knowledge-discover/knowledge-discover.component';

import { KnowledgeRoutingModule } from './knowledge-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KnowledgeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
  ],
  declarations: [
    KnowledgeComponent,
    KnowledgeDashboardComponent,
    KnowledgeCollectionsComponent,
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
