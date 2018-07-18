import { Routes } from '@angular/router';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { NoteContentComponent } from './note-content/note-content.component';
import { NoteMineComponent } from './note-mine/note-mine.component';

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
    path: 'note/mine',
    component: NoteMineComponent
  },
  {
    path: 'note/editor',
    component: NoteEditorComponent
  },
  {
    path: 'note/:id',
    component: NoteContentComponent
  },
]
