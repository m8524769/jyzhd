import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  nickname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required]);
  hidePassword: boolean = true;
  isSubmitting: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.isSubmitting = true;
    this.userService.login(this.email.value, this.password.value)
      .subscribe(user => {
        if (user) { // Success
          this.userService.keep(user);
          this.router.navigateByUrl("note/dashboard");
          this.snackBar.dismiss();
        } else {
          this.snackBar.open('邮箱或密码错误', '我改！');
        }
        this.isSubmitting = false;
      });
  }

  register(): void {
    this.isSubmitting = true;
    this.userService.register(this.email.value, this.nickname.value, this.password.value)
      .subscribe(user => {
        if (user) { // Success
          let snackBarRef = this.snackBar.open('注册成功！', '登录该账户');
          snackBarRef.onAction().subscribe(() => {
            this.login();
          })
        } else {
          this.snackBar.open('该邮箱已被注册', '我换一个！');
        }
        this.isSubmitting = false;
      });
  }

  checkEmail(): string {
    return this.email.hasError('email') ? '格式不对啊兄弟' : '';
  }

}
