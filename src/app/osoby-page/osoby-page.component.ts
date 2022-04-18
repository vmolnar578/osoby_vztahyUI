import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osoby-page',
  templateUrl: './osoby-page.component.html',
  styleUrls: ['./osoby-page.component.css'],
})
export class OsobyPageComponent implements OnInit {
  private _menu: string;
  ngOnInit(): void {
    document.getElementById('ziaci')?.classList.add('font-bold');
  }
  constructor() {
    this._menu = 'z';
  }

  public getMenu(): string {
    return this._menu;
  }

  public setMenu(value: string) {
    if (value == 'z') {
      document.getElementById('ziaci')?.classList.add('font-bold');
      document.getElementById('ucitelia')?.classList.remove('font-bold');
      document.getElementById('rodicia')?.classList.remove('font-bold');
    }
    if (value == 'u') {
      document.getElementById('ziaci')?.classList.remove('font-bold');
      document.getElementById('ucitelia')?.classList.add('font-bold');
      document.getElementById('rodicia')?.classList.remove('font-bold');
    }
    if (value == 'r') {
      document.getElementById('ziaci')?.classList.remove('font-bold');
      document.getElementById('ucitelia')?.classList.remove('font-bold');
      document.getElementById('rodicia')?.classList.add('font-bold');
    }
    this._menu = value;
  }
}
