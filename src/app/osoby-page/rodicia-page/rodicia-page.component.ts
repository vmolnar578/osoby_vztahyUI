import { Component, OnInit } from '@angular/core';
import {Rodic} from "../../models/rodic.model";

@Component({
  selector: 'app-rodicia-page',
  templateUrl: './rodicia-page.component.html',
  styleUrls: ['./rodicia-page.component.css']
})
export class RodiciaPageComponent implements OnInit {
  rodicia: Rodic[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
