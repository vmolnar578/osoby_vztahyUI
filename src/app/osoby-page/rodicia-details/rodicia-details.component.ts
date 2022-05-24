import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lunch } from 'src/app/models/lunch.model';
import { Parent } from 'src/app/models/parent.model';
import { Student } from 'src/app/models/student.model';
import { ObedyService } from 'src/app/obedy-page/obedy-page.service';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-rodicia-details',
  templateUrl: './rodicia-details.component.html',
  styleUrls: ['./rodicia-details.component.css'],
})
export class RodiciaDetailsComponent implements OnInit {
  person: Parent | undefined;
  student: Student | undefined;
  constructor(private osobyService: OsobyService) {}
  private sub: Subscription = new Subscription();
  @Input()
  set parent(p: Parent | undefined) {
    if (p) {
      this.person = p;
    }
  }
  ngOnInit(): void {
    let interval = setInterval(() => {
      this.findStudent();
    }, 500);
    if (this.student != undefined) {
      clearInterval(interval);
    }
  }
  findStudent() {
    if (this.person?.childId != undefined) {
      this.sub.add(
        this.osobyService.getStudentById(this.person.childId).subscribe((data: Student) => {
          this.student = data;
        })
      );
    }
  }
}
