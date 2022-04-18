import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
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
      this.router.navigate(['/login']);
    }
  }
}
