import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-osoby-page',
  templateUrl: './osoby-page.component.html',
  styleUrls: ['./osoby-page.component.css'],
})
export class OsobyPageComponent implements OnInit {
  private _menu: string;
  ngOnInit(): void {
  }
  constructor() {
    this._menu = "z";
  }

  public getMenu(): string {
    return this._menu;
  }

  public setMenu(value: string) {
    this._menu = value;
  }
}
