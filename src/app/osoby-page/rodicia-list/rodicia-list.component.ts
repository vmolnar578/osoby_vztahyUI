import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Parent } from 'src/app/models/parent.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-rodicia-list',
  templateUrl: './rodicia-list.component.html',
  styleUrls: ['./rodicia-list.component.css'],
})
export class RodiciaListComponent implements OnInit {
  @Input()
  parents: Parent[] = [];
  private sub: Subscription = new Subscription();

  constructor(private osobySrv: OsobyService) {}
  @Output()
  editParent: EventEmitter<Parent> = new EventEmitter<Parent>();
  @Output()
  showParent: EventEmitter<Parent> = new EventEmitter<Parent>();
  @Output()
  deleteParent: EventEmitter<Parent> = new EventEmitter<Parent>();
  refreshParents(): void {
    this.sub.add(
      this.osobySrv.getParents().subscribe((data: Parent[]) => {
        this.parents = data;
        console.log(data);
      })
    );
  }
  show(parent: Parent): void {
    this.showParent.emit(parent);
  }
  edit(parent: Parent): void {
    this.editParent.emit(parent);
  }

  delete(parent: Parent): void {
    this.deleteParent.emit(parent);
  }
  ngOnInit(): void {
    this.refreshParents();
  }
}
