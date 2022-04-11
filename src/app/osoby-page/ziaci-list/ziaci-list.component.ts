import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ziak } from 'src/app/models/ziak.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ziaci-list',
  templateUrl: './ziaci-list.component.html',
  styleUrls: ['./ziaci-list.component.css'],
})
export class ZiaciListComponent implements OnInit {
  @Input()
  ziaci: Ziak[] = [];
  private sub: Subscription = new Subscription();

  constructor(private osobySrv: OsobyService) {}
  @Output()
  editStudent: EventEmitter<Ziak> = new EventEmitter<Ziak>();
  @Output()
  deleteStudent: EventEmitter<Ziak> = new EventEmitter<Ziak>();
  refreshOsoby(): void {
    this.sub.add(
      this.osobySrv.getStudents().subscribe((data: Ziak[]) => {
        this.ziaci = data;
        console.log(data);
      })
    );
  }
  edit(ziak: Ziak): void {
    this.editStudent.emit(ziak);
  }

  delete(ziak: Ziak): void {
    this.deleteStudent.emit(ziak);
  }
  ngOnInit(): void {
    this.refreshOsoby();
  }
}
