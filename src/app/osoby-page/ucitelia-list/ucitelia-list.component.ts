import {Component, Input, OnInit} from '@angular/core';
import {Ucitel} from "../../models/ucitel.model";

@Component({
  selector: 'app-ucitelia-list',
  templateUrl: './ucitelia-list.component.html',
  styleUrls: ['./ucitelia-list.component.css']
})
export class UciteliaListComponent implements OnInit {
  @Input()
  ucitelia: Ucitel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
