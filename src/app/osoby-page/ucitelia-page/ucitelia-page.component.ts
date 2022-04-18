import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ucitelia-page',
  templateUrl: './ucitelia-page.component.html',
  styleUrls: ['./ucitelia-page.component.css'],
})
export class UciteliaPageComponent implements OnInit {
  teachers: Teacher[] = [];
  toggleForm(): void {
    let form = document.getElementById('form');
    form?.classList.toggle('hidden');
    form?.classList.toggle('flex');
    document.getElementById('add')?.classList.toggle('text-[#0c2970cc]');
  }
  constructor(private osobyService: OsobyService) {}
  teacherShowing?: Teacher;
  ngOnInit(): void {}
  teacherEditing?: Teacher;
  refresh(): void {
    this.osobyService.getTeachers().subscribe((t) => {
      this.teachers = t;
    });
  }
  pushTeacher(t: Teacher): void {
    this.osobyService.createTeacher(t).subscribe(() => {
      this.refresh();
    });
  }
  updateTeacher(t: Teacher): void {
    this.osobyService.updateTeacher(t.id, t).subscribe(() => {
      this.refresh();
    });
  }

  editTeacherFromList(t: Teacher): void {
    this.teacherEditing = t;
  }
  showTeacherFromList(t: Teacher): void {
    this.teacherShowing = t;
  }
  deleteTeacherFromList(t: Teacher): void {
    this.osobyService.deleteTeacher(t.id).subscribe(() => {
      this.refresh();
    });
  }
}
