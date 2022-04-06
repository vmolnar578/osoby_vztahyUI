import {Component, Input, OnInit} from '@angular/core';
import {Rodic} from "../../models/rodic.model";

@Component({
  selector: 'app-rodicia-list',
  templateUrl: './rodicia-list.component.html',
  styleUrls: ['./rodicia-list.component.css']
})
export class RodiciaListComponent implements OnInit {
  @Input()
  rodicia: Rodic[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
