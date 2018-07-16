import { Routes } from '@angular/router';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { NoteContentComponent } from './note-content/note-content.component';

export const noteRoutes: Routes = [
  {
    path: 'note',
    redirectTo: '/note/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'note/dashboard',
    component: NoteDashboardComponent
  },
  {
    path: 'note/:id',
    component: NoteContentComponent
  },
  {
    path: 'note/editor',
    component: NoteEditorComponent
  },
]
