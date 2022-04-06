import { Component, OnInit } from '@angular/core';
import {Ucitel} from "../../models/ucitel.model";

@Component({
  selector: 'app-ucitelia-page',
  templateUrl: './ucitelia-page.component.html',
  styleUrls: ['./ucitelia-page.component.css']
})
export class UciteliaPageComponent implements OnInit {
  ucitelia: Ucitel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
