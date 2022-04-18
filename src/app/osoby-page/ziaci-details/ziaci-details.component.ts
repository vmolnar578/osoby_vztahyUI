import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-ziaci-details',
  templateUrl: './ziaci-details.component.html',
  styleUrls: ['./ziaci-details.component.css'],
})
export class ZiaciDetailsComponent implements OnInit {
  person: Student | undefined;
  constructor() {}
  @Input()
  set student(s: Student | undefined) {
    if (s) {
      this.person = s;
    }
  }
  ngOnInit(): void {}
}
