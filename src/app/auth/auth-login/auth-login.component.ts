import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  nickname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required]);
  hidePassword: boolean = true;
  isSubmitting: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    public authDialogRef: MatDialogRef<any>,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.authDialogRef.keydownEvents()
      .subscribe(event => { // Press `Enter` to login
        if (event.key === 'Enter' && !this.email.invalid && !this.password.invalid) {
          if (!this.nickname.invalid) {
            // this.signUp();
          } else {
            this.login();
          }
        }
      })
  }

  login(): void {
    this.isSubmitting = true;
    this.authService.login(this.email.value, this.password.value)
      .subscribe(() => {
        this.isSubmitting = false;
        if (this.authService.isLoggedIn) {
          this.router.navigate([this.authService.redirectUrl]);
          this.authDialogRef.close();
          this.snackBar.dismiss();
        }
      });
  }

  // signUp(): void {
  //   this.isSubmitting = true;
  //   this.userService.register(this.email.value, this.nickname.value, this.password.value)
  //     .subscribe(user => {
  //       if (user) { // Success
  //         let snackBarRef = this.snackBar.open('注册成功！', '登录该账户');
  //         snackBarRef.onAction().subscribe(() => {
  //           this.login();
  //         })
  //       } else {
  //         let snackBarRef = this.snackBar.open('该邮箱已被注册', '我换一个！');
  //         snackBarRef.onAction().subscribe(() => {
  //           this.email.setValue('');
  //         })
  //       }
  //       this.isSubmitting = false;
  //     });
  // }

  checkEmail(): string {
    return this.email.hasError('email') ? '格式不对啊兄弟' : '';
  }

}
