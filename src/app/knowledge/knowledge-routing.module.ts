import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeDiscoverComponent } from './knowledge-discover/knowledge-discover.component';
import { KnowledgeViewComponent } from './knowledge-view/knowledge-view.component';
import { KnowledgeEditorComponent } from './knowledge-editor/knowledge-editor.component';

import { AuthGuard } from '../auth/auth-guard.service';

const knowledgeRoutes: Routes = [{
    path: 'knowledge',
    component: KnowledgeComponent,
    children: [
        {
            path: 'create',
            component: KnowledgeEditorComponent,
            canActivate: [AuthGuard],
        },
        {
            path: '',
            component: KnowledgeDiscoverComponent,
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
