import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ziak } from 'src/app/models/ziak.model';

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
    });
  }
  @Input()
  set ziak(z: Ziak | undefined) {
    if (z) {
      this.studentForm.setValue(z);
    }
  }
  @Output() studentEmitter = new EventEmitter<Ziak>();
  ngOnInit(): void {}
  @Output() editStudentEmitter = new EventEmitter<Ziak>();
  public addStudent() {
    this.studentEmitter.emit({
      id: this.studentForm.value.id,
      firstName: this.studentForm.value.firstName,
      lastName: this.studentForm.value.lastName,
      gender: this.studentForm.value.gender,
      grade: this.studentForm.value.grade,
      dateOfBirth: this.studentForm.value.dateOfBirth,
    });
    this.studentForm.reset();
  }
  public editStudent(): void {
    this.editStudentEmitter.emit(this.studentForm.value);
    this.studentForm.reset();
  }
}
