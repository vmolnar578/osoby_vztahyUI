import { Component, OnInit } from '@angular/core';
import {Ziak} from "../../models/ziak.model";

@Component({
  selector: 'app-ziaci-page',
  templateUrl: './ziaci-page.component.html',
  styleUrls: ['./ziaci-page.component.css']
})
export class ZiaciPageComponent implements OnInit {
  ziaci: Ziak[] = [];
  constructor() {

  }

  ngOnInit(): void {
  }

}
