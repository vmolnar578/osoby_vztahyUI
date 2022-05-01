import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login-page/login-page.service';
enum MENU {
  OSOBY,
  PREDMETY,
  OBEDY,
  LOGIN,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'osoby_vztahyUI';
  menu = MENU;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    this.router.navigate(['/osoby']);
  }
  public selectMenu(m: MENU) {
    if (m == MENU.OSOBY) {
      this.router.navigate(['/osoby']);
    }
    if (m == MENU.PREDMETY) {
      this.router.navigate(['/predmety']);
    }
    if (m == MENU.OBEDY) {
      this.router.navigate(['/obedy']);
    }
    if (m == MENU.LOGIN) {
      if (this.authService.isUserSignedin()) {
        this.authService.signout();
        this.router.navigate(['/osoby']);
      }
      else {
        this.router.navigate(['/login']);
      }
    }
  }

  getLoginStatus() {
    if (this.authService.isUserSignedin()) {
      return "Odhlásiť sa";
    }
    return "Prihlásiť sa";
  }
}
