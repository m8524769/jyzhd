import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { noteRoutes } from './note.routes';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { NoteContentComponent } from './note-content/note-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
  ],
  declarations: [
    NoteEditorComponent,
    NoteDashboardComponent,
    NoteContentComponent,
  ],
  exports: [
    NoteEditorComponent,
    NoteDashboardComponent,
    NoteContentComponent,
  ]
})
export class NoteModule { }
