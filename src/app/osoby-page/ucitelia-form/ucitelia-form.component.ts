import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Teacher } from 'src/app/models/teacher.model';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-ucitelia-form',
  templateUrl: './ucitelia-form.component.html',
  styleUrls: ['./ucitelia-form.component.css'],
})
export class UciteliaFormComponent implements OnInit {
  teacherForm: FormGroup;
  constructor() {
    this.teacherForm = new FormGroup({
      id: new FormControl(Math.round(Math.random() * 500)),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      gender: new FormControl(null),
      phoneNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
      lunchId: new FormControl(null),
      image: new FormControl(null),
    });
  }
  @Input()
  set teacher(t: Teacher | undefined) {
    if (t) {
      t.dateOfBirth = formatDate(t.dateOfBirth, 'yyyy-MM-dd', 'en-US');
      this.teacherForm.setValue(t);
    }
  }
  @Output() teacherEmitter = new EventEmitter<Teacher>();
  ngOnInit(): void {}
  @Output() editTeacherEmitter = new EventEmitter<Teacher>();
  public addTeacher() {
    this.teacherEmitter.emit({
      id: this.teacherForm.value.id,
      firstName: this.teacherForm.value.firstName,
      lastName: this.teacherForm.value.lastName,
      gender: this.teacherForm.value.gender,
      phoneNumber: this.teacherForm.value.phoneNumber,
      dateOfBirth: this.teacherForm.value.dateOfBirth,
      lunchId: this.teacherForm.value.lunchId,
      image: this.teacherForm.value.image,
    });
    this.teacherForm.reset();
  }
  public editTeacher(): void {
    this.editTeacherEmitter.emit(this.teacherForm.value);
    this.teacherForm.reset();
  }
}
