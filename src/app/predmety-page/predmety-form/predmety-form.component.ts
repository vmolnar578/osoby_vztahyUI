import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-predmety-form',
  templateUrl: './predmety-form.component.html',
  styleUrls: ['./predmety-form.component.css'],
})
export class PredmetyFormComponent implements OnInit {
  subjectForm: FormGroup;
  constructor() {
    this.subjectForm = new FormGroup({
      id: new FormControl(Math.round(Math.random() * 500)),
      grade: new FormControl(null),
      title: new FormControl(null),
    });
  }
  @Input()
  set subject(p: Subject | undefined) {
    if (p) {
      this.subjectForm.setValue(p);
    }
  }
  @Output() subjectEmitter = new EventEmitter<Subject>();
  ngOnInit(): void {}
  @Output() editSubjectEmitter = new EventEmitter<Subject>();
  public addSubject() {
    this.subjectEmitter.emit({
      id: this.subjectForm.value.id,
      grade: this.subjectForm.value.grade,
      title: this.subjectForm.value.title,
    });
    this.subjectForm.reset();
  }
  public editSubject(): void {
    this.editSubjectEmitter.emit(this.subjectForm.value);
    this.subjectForm.reset();
  }
}
