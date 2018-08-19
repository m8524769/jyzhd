import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { AuthLoginComponent } from './auth-login/auth-login.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: 'login',
      component: AuthLoginComponent
    }]),
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatIconModule,
  ],
  declarations: [
    AuthLoginComponent,
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
