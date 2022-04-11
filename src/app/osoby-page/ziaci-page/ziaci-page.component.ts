import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ziak } from '../../models/ziak.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ziaci-page',
  templateUrl: './ziaci-page.component.html',
  styleUrls: ['./ziaci-page.component.css'],
})
export class ZiaciPageComponent implements OnInit {
  ziaci: Ziak[] = [];
  constructor(private osobyService: OsobyService) {}
  ngOnInit(): void {}
  studentEditing?: Ziak;
  refresh(): void {
    this.osobyService.getStudents().subscribe((z) => {
      this.ziaci = z;
    });
  }
  pushStudent(z: Ziak): void {
    console.log(z);
    this.osobyService.createStudent(z).subscribe(() => {
      this.refresh();
    });
  }
  updateStudent(z: Ziak): void {
    this.osobyService.updateStudent(z.id, z).subscribe(() => {
      this.refresh();
    });
  }

  editStudentFromList(z: Ziak): void {
    this.studentEditing = z;
  }

  deleteStudentFromList(z: Ziak): void {
    this.osobyService.deleteStudent(z.id).subscribe(() => {
      this.refresh();
    });
  }
}
