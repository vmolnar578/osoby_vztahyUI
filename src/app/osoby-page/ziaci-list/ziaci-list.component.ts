import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ziaci-list',
  templateUrl: './ziaci-list.component.html',
  styleUrls: ['./ziaci-list.component.css'],
})
export class ZiaciListComponent implements OnInit {
  @Input()
  students: Student[] = [];
  role = sessionStorage.getItem('role');
  private sub: Subscription = new Subscription();

  constructor(private osobySrv: OsobyService) {}
  @Output()
  editStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output()
  showStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output()
  deleteStudent: EventEmitter<Student> = new EventEmitter<Student>();
  refreshStudents(): void {
    this.sub.add(
      this.osobySrv.getStudents().subscribe((data: Student[]) => {
        this.students = data;
      })
    );
  }
  show(student: Student): void {
    this.showStudent.emit(student);
  }
  edit(student: Student): void {
    this.editStudent.emit(student);
  }

  delete(student: Student): void {
    this.deleteStudent.emit(student);
  }
  ngOnInit(): void {
    this.refreshStudents();
  }
}
