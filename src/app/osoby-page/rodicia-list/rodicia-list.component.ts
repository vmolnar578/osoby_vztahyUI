import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Rodic } from '../../models/rodic.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-rodicia-list',
  templateUrl: './rodicia-list.component.html',
  styleUrls: ['./rodicia-list.component.css'],
})
export class RodiciaListComponent implements OnInit {
  @Input()
  rodicia: Rodic[] = [];
  private sub: Subscription = new Subscription();

  constructor(private osobySrv: OsobyService) {}

  refreshOsoby(): void {
    this.sub.add(
      this.osobySrv.getParents().subscribe((data: Rodic[]) => {
        this.rodicia = data;
        console.log(data);
      })
    );
  }

  ngOnInit(): void {
    this.refreshOsoby();
  }
}
