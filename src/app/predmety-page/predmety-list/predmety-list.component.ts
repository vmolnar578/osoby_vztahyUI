import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'src/app/models/subject.model';
import { PredmetyService } from '../predmety-page.service';

@Component({
  selector: 'app-predmety-list',
  templateUrl: './predmety-list.component.html',
  styleUrls: ['./predmety-list.component.css'],
})
export class PredmetyListComponent implements OnInit {
  @Input()
  subjects: Subject[] = [];
  @Input()
  grade: String;
  gradeCopy: String;
  private sub: Subscription = new Subscription();
  filteredSubjects: Subject[] = [];
  constructor(private predmetySrv: PredmetyService) {
    this.grade = '0';
    this.gradeCopy = this.grade;
    setInterval(() => {
      if (this.grade != this.gradeCopy) {
        this.showGrade(this.grade);
        this.gradeCopy = this.grade;
      }
    }, 500);
  }
  showGrade(value: any): void {
    this.filteredSubjects = [];
    this.refreshSubjects();
    setTimeout(() => {
      this.subjects.forEach((s) => {
        if (s.grade == parseInt(value)) {
          this.filteredSubjects.push(s);
        }
      });
      console.log(this.filteredSubjects);
    }, 300);
  }
  @Output()
  editSubject: EventEmitter<Subject> = new EventEmitter<Subject>();
  @Output()
  deleteSubject: EventEmitter<Subject> = new EventEmitter<Subject>();
  refreshSubjects(): void {
    this.sub.add(
      this.predmetySrv.getSubjects().subscribe((data: Subject[]) => {
        this.subjects = data;
      })
    );
  }
  edit(subject: Subject): void {
    this.editSubject.emit(subject);
    this.showGrade(this.grade);
  }

  delete(subject: Subject): void {
    this.deleteSubject.emit(subject);
    this.showGrade(this.grade);
  }
  ngOnInit(): void {
    this.refreshSubjects();
  }
}
