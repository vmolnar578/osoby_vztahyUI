import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-ucitelia-details',
  templateUrl: './ucitelia-details.component.html',
  styleUrls: ['./ucitelia-details.component.css'],
})
export class UciteliaDetailsComponent implements OnInit {
  person: Teacher | undefined;
  constructor() {}
  @Input()
  set teacher(t: Teacher | undefined) {
    if (t) {
      this.person = t;
    }
  }
  ngOnInit(): void {}
}
