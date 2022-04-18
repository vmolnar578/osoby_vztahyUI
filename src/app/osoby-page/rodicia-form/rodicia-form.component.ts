import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Parent } from 'src/app/models/parent.model';

@Component({
  selector: 'app-rodicia-form',
  templateUrl: './rodicia-form.component.html',
  styleUrls: ['./rodicia-form.component.css'],
})
export class RodiciaFormComponent implements OnInit {
  parentForm: FormGroup;
  constructor() {
    this.parentForm = new FormGroup({
      id: new FormControl(Math.round(Math.random() * 500)),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      gender: new FormControl(null),
      phoneNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
    });
  }
  @Input()
  set parent(p: Parent | undefined) {
    if (p) {
      this.parentForm.setValue(p);
    }
  }
  @Output() parentEmitter = new EventEmitter<Parent>();
  ngOnInit(): void {}
  @Output() editParentEmitter = new EventEmitter<Parent>();
  public addParent() {
    this.parentEmitter.emit({
      id: this.parentForm.value.id,
      firstName: this.parentForm.value.firstName,
      lastName: this.parentForm.value.lastName,
      gender: this.parentForm.value.gender,
      phoneNumber: this.parentForm.value.phoneNumber,
      dateOfBirth: this.parentForm.value.dateOfBirth,
    });
    this.parentForm.reset();
  }
  public editParent(): void {
    this.editParentEmitter.emit(this.parentForm.value);
    this.parentForm.reset();
  }
}
