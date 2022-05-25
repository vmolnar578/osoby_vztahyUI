import { Component, OnInit } from '@angular/core';
import { Request } from '../models/request.model';
import { AuthService } from './login-page.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  users: User[] = [];
  /*request: Request[] = [];
  ngOnInit(): void {}
  constructor(private loginService: LoginService) {}

  login(r: Request): void {
    this.loginService.updateLunch(r.userName, r.userPassword).subscribe(() => {
      this.refresh();
    });
  }
  register(): void {
    //TODO
  }*/

  constructor(private router: Router, private authService: AuthService) {}
  username: string = '';
  password: string = '';

  ngOnInit() {
    if (this.authService.isUserSignedin()) {
      //this.router.navigateByUrl('osoby');
    }
    this.refresh();
  }
  refresh(): void {
    this.authService.getUsers().subscribe((s) => {
      this.users = s;
      console.log(this.users);
    });
  }
  login() {
    const request: Request = { username: this.username, passwordHash: this.password };
    this.authService.signin(request).subscribe((result) => {
      this.router.navigateByUrl('osoby');
    });
  }

  register() {
    const request: Request = { username: this.username, passwordHash: this.password };
    this.authService.register(request).subscribe(() => {
      this.refresh();
      alert("Úspešná registrácia!")
    });
  }
}
