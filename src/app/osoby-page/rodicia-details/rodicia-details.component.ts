import { Component, Input, OnInit } from '@angular/core';
import { Parent } from 'src/app/models/parent.model';

@Component({
  selector: 'app-rodicia-details',
  templateUrl: './rodicia-details.component.html',
  styleUrls: ['./rodicia-details.component.css'],
})
export class RodiciaDetailsComponent implements OnInit {
  person: Parent | undefined;
  constructor() {}
  @Input()
  set parent(p: Parent | undefined) {
    if (p) {
      this.person = p;
    }
  }
  ngOnInit(): void {}
}
