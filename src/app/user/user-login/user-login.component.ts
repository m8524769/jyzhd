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
  nickname = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email.value, this.password.value)
      .subscribe(user => {
        if (user) { // Success
          this.userService.keep(user);
          this.router.navigateByUrl("note/dashboard");
        } else {
          this.snackBar.open('邮箱或密码错误', '我改！');
        }
      });
  }

  register() {
    this.userService.register(this.email.value, this.nickname.value, this.password.value)
      .subscribe(user => {
        let snackBarRef = this.snackBar.open(`Hi，${user.nickname}！您已注册成功！`, '登录该账户');
        snackBarRef.onAction().subscribe(() => {
          this.login();
        })
      });
  }

  checkEmail(): string {
    return this.email.hasError('required') ? '邮箱为必填项' :
      this.email.hasError('email') ? '格式不对啊兄弟' : '';
  }

  checkNickname(): string {
    return this.email.hasError('required') ? '昵称不合法' : '';
  }

  checkPassword(): string {
    return this.email.hasError('required') ? '密码不能为空' : '';
  }

}
