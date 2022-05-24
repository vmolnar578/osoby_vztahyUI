import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Parent } from 'src/app/models/parent.model';
import { formatDate } from '@angular/common';

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
      image: new FormControl('https://64.media.tumblr.com/db9cf4ca6cefb82ec714fd65980c0071/507251de61c78a3f-7b/s500x750/ddbb9f0a10be3b4620f2b35d603bcf8171e98020.jpg'),
      childId: new FormControl(null),
    });
  }
  @Input()
  set parent(p: Parent | undefined) {
    if (p) {
      p.dateOfBirth = formatDate(p.dateOfBirth, 'yyyy-MM-dd', 'en-US');
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
      image: this.parentForm.value.image,
      childId: this.parentForm.value.childId,
    });
    this.parentForm.reset();
  }
  public editParent(): void {
    this.editParentEmitter.emit(this.parentForm.value);
    this.parentForm.reset();
  }
}
