import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lunch } from 'src/app/models/lunch.model';

@Component({
  selector: 'app-obedy-form',
  templateUrl: './obedy-form.component.html',
  styleUrls: ['./obedy-form.component.css'],
})
export class ObedyFormComponent implements OnInit {
  lunchForm: FormGroup;
  constructor() {
    this.lunchForm = new FormGroup({
      id: new FormControl(null),
      mainMeal: new FormControl(null),
      image: new FormControl(null),
    });
  }
  ngOnInit(): void {}
  @Input()
  set lunch(s: Lunch | undefined) {
    if (s) {
      this.lunchForm.setValue(s);
    }
  }
  @Output() lunchEmitter = new EventEmitter<Lunch>();
  @Output() editLunchEmitter = new EventEmitter<Lunch>();
  editLunch() {
    this.editLunchEmitter.emit(this.lunchForm.value);
    this.lunchForm.reset();
  }
}
