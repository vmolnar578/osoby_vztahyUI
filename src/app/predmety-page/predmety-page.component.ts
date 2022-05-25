import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject.model';
import { PredmetyService } from './predmety-page.service';

@Component({
  selector: 'app-predmety-page',
  templateUrl: './predmety-page.component.html',
  styleUrls: ['./predmety-page.component.css'],
})
export class PredmetyPageComponent implements OnInit {
  subjects: Subject[] = [];
  grade: String;
  role = sessionStorage.getItem('role');
  toggleForm(): void {
    let form = document.getElementById('form');
    form?.classList.toggle('hidden');
    form?.classList.toggle('flex');
    document.getElementById('add')?.classList.toggle('text-[#0c2970cc]');
  }
  constructor(private predmetyService: PredmetyService) {
    this.grade = '0';
  }
  ngOnInit(): void {}
  subjectEditing?: Subject;
  getGrade(): void {
    this.grade = (<HTMLInputElement>document.getElementById('subjects')).value;
  }
  refresh(): void {
    this.predmetyService.getSubjects().subscribe((s) => {
      this.subjects = s;
    });
  }
  pushSubject(s: Subject): void {
    this.predmetyService.createSubject(s).subscribe(() => {
      this.refresh();
    });
  }
  updateSubject(s: Subject): void {
    this.predmetyService.updateSubject(s.id, s).subscribe(() => {
      this.refresh();
    });
  }
  editSubjectFromList(s: Subject): void {
    this.subjectEditing = s;
  }
  deleteSubjectFromList(s: Subject): void {
    this.predmetyService.deleteSubject(s.id).subscribe(() => {
      this.refresh();
    });
  }
}
