import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Lunch } from 'src/app/models/lunch.model';
import { Parent } from 'src/app/models/parent.model';
import { Student } from 'src/app/models/student.model';
import { Teacher } from 'src/app/models/teacher.model';
import { ObedyService } from 'src/app/obedy-page/obedy-page.service';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ziaci-details',
  templateUrl: './ziaci-details.component.html',
  styleUrls: ['./ziaci-details.component.css'],
})
export class ZiaciDetailsComponent implements OnInit {
  person: Student | undefined;
  parent1: Parent | undefined;
  parent2: Parent | undefined;
  teacher: Teacher | undefined;
  lunch: Lunch | undefined;
  constructor(private osobyService: OsobyService, private obedyService: ObedyService) {}
  private sub: Subscription = new Subscription();
  @Input()
  set student(s: Student | undefined) {
    if (s) {
      this.person = s;
    }
  }
  ngOnInit(): void {
    let interval = setInterval(() => {
      this.findParent();
      this.findTeacher();
      this.findLunch();
    }, 500);
    if (this.parent1 != undefined && this.parent2 != undefined && this.lunch != undefined) {
      clearInterval(interval);
    }
  }
  findParent() {
    if (this.person?.parentOneId != undefined) {
      this.sub.add(
        this.osobyService.getParentById(this.person.parentOneId).subscribe((data: Parent) => {
          this.parent1 = data;
        })
      );
    }
    if (this.person?.parentTwoId != undefined) {
      this.sub.add(
        this.osobyService.getParentById(this.person.parentTwoId).subscribe((data: Parent) => {
          this.parent2 = data;
        })
      );
    }
  }
  findTeacher() {
    if (this.person?.teacherId != undefined) {
      this.sub.add(
        this.osobyService.getTeacherById(this.person.teacherId).subscribe((data: Teacher) => {
          this.teacher = data;
        })
      );
    }
  }
  findLunch() {
    if (this.person?.lunchId != undefined) {
      this.sub.add(
        this.obedyService.getLunchById(this.person.lunchId).subscribe((data: Lunch) => {
          this.lunch = data;
        })
      );
    }
  }
}
