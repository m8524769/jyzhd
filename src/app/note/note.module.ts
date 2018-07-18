import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { noteRoutes } from './note.routes';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { NoteContentComponent } from './note-content/note-content.component';
import { NoteMineComponent } from './note-mine/note-mine.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(noteRoutes),
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
    NoteEditorComponent,
    NoteDashboardComponent,
    NoteContentComponent,
    NoteMineComponent,
  ],
  exports: [
    NoteEditorComponent,
    NoteDashboardComponent,
    NoteContentComponent,
    NoteMineComponent,
  ]
})
export class NoteModule { }
