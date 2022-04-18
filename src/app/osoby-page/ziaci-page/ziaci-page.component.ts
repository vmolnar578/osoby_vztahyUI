import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ziaci-page',
  templateUrl: './ziaci-page.component.html',
  styleUrls: ['./ziaci-page.component.css'],
})
export class ZiaciPageComponent implements OnInit {
  students: Student[] = [];
  private sub: Subscription = new Subscription();
  toggleForm(): void {
    let form = document.getElementById('form');
    form?.classList.toggle('hidden');
    form?.classList.toggle('flex');
    document.getElementById('add')?.classList.toggle('text-[#0c2970cc]');
  }
  constructor(private osobyService: OsobyService) {}
  studentShowing?: Student;
  ngOnInit(): void {
    this.sub.add(
      this.osobyService.getStudentById(13).subscribe((data: Student) => {
        this.studentShowing = data;
        console.log(data);
      })
    );
  }
  studentEditing?: Student;
  refresh(): void {
    this.osobyService.getStudents().subscribe((s) => {
      this.students = s;
    });
  }
  pushStudent(s: Student): void {
    this.osobyService.createStudent(s).subscribe(() => {
      this.refresh();
    });
  }
  updateStudent(s: Student): void {
    this.osobyService.updateStudent(s.id, s).subscribe(() => {
      this.refresh();
    });
  }

  editStudentFromList(s: Student): void {
    this.studentEditing = s;
  }
  showStudentFromList(s: Student): void {
    this.studentShowing = s;
  }
  deleteStudentFromList(s: Student): void {
    this.osobyService.deleteStudent(s.id).subscribe(() => {
      this.refresh();
    });
  }
}
