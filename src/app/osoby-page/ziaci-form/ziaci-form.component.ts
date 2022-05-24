import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ziaci-form',
  templateUrl: './ziaci-form.component.html',
  styleUrls: ['./ziaci-form.component.css'],
})
export class ZiaciFormComponent implements OnInit {
  studentForm: FormGroup;
  constructor() {
    this.studentForm = new FormGroup({
      id: new FormControl(Math.round(Math.random() * 500)),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      gender: new FormControl(null),
      grade: new FormControl(null),
      dateOfBirth: new FormControl(null),
      lunchId: new FormControl(null),
      image: new FormControl('https://lirp.cdn-website.com/8e014d2b54624d908fccd15abc8093f0/dms3rep/multi/opt/10856d0-384w.jpg'),
      parentOneId: new FormControl(null),
      parentTwoId: new FormControl(null),
      teacherId: new FormControl(null),
    });
  }
  @Input()
  set student(s: Student | undefined) {
    if (s) {
      s.dateOfBirth = formatDate(s.dateOfBirth, 'yyyy-MM-dd', 'en-US');
      this.studentForm.setValue(s);
    }
  }
  @Output() studentEmitter = new EventEmitter<Student>();
  ngOnInit(): void {}
  @Output() editStudentEmitter = new EventEmitter<Student>();
  public addStudent() {
    this.studentEmitter.emit({
      id: this.studentForm.value.id,
      firstName: this.studentForm.value.firstName,
      lastName: this.studentForm.value.lastName,
      gender: this.studentForm.value.gender,
      grade: this.studentForm.value.grade,
      dateOfBirth: this.studentForm.value.dateOfBirth,
      lunchId: this.studentForm.value.lunchId,
      image: this.studentForm.value.image,
      parentOneId: this.studentForm.value.parentOneId,
      parentTwoId: this.studentForm.value.parentTwoId,
      teacherId: this.studentForm.value.teacherId,
    });
    this.studentForm.reset();
  }
  public editStudent(): void {
    this.editStudentEmitter.emit(this.studentForm.value);
    this.studentForm.reset();
  }
}
