import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OsobyService } from '../osoby-page.service';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-ucitelia-list',
  templateUrl: './ucitelia-list.component.html',
  styleUrls: ['./ucitelia-list.component.css'],
})
export class UciteliaListComponent implements OnInit {
  @Input()
  teachers: Teacher[] = [];
  role = sessionStorage.getItem('role');
  private sub: Subscription = new Subscription();

  constructor(private osobySrv: OsobyService) {}
  @Output()
  editTeacher: EventEmitter<Teacher> = new EventEmitter<Teacher>();
  @Output()
  showTeacher: EventEmitter<Teacher> = new EventEmitter<Teacher>();
  @Output()
  deleteTeacher: EventEmitter<Teacher> = new EventEmitter<Teacher>();
  refreshTeachers(): void {
    this.sub.add(
      this.osobySrv.getTeachers().subscribe((data: Teacher[]) => {
        this.teachers = data;
      })
    );
  }
  show(teacher: Teacher): void {
    this.showTeacher.emit(teacher);
  }
  edit(teacher: Teacher): void {
    this.editTeacher.emit(teacher);
  }

  delete(teacher: Teacher): void {
    this.deleteTeacher.emit(teacher);
  }
  ngOnInit(): void {
    this.refreshTeachers();
  }
}
