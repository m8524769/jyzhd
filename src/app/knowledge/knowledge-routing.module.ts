import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeDashboardComponent } from './knowledge-dashboard/knowledge-dashboard.component';
import { KnowledgeCollectionsComponent } from './knowledge-collections/knowledge-collections.component';
import { KnowledgeViewComponent } from './knowledge-view/knowledge-view.component';
import { KnowledgeEditorComponent } from './knowledge-editor/knowledge-editor.component';
import { KnowledgeDiscoverComponent } from './knowledge-discover/knowledge-discover.component';

import { AuthGuard } from '../auth/auth-guard.service';

const knowledgeRoutes: Routes = [{
    path: 'knowledge',
    component: KnowledgeComponent,
    children: [
        {
            path: 'discover',
            component: KnowledgeDiscoverComponent,
        },
        {
            path: 'collections',
            component: KnowledgeCollectionsComponent,
            canActivate: [AuthGuard],
            children: [
                {
                    path: ':id',
                    component: KnowledgeViewComponent,
                }
            ]
        },
        {
            path: 'create',
            component: KnowledgeEditorComponent,
            canActivate: [AuthGuard],
        },
        {
            path: '',
            component: KnowledgeDashboardComponent,
            children: [
                {
                    path: ':id',
                    component: KnowledgeViewComponent,
                },
            ]
        },
        {
            path: ':id',
            component: KnowledgeViewComponent,
            children: [
                {
                    path: 'modify',
                    component: KnowledgeEditorComponent,
                    canActivate: [AuthGuard],
                },
            ]
        },
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(knowledgeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class KnowledgeRoutingModule { }
