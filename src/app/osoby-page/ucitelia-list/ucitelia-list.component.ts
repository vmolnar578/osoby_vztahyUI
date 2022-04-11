import { Component, Input, OnInit } from '@angular/core';
import { Ucitel } from '../../models/ucitel.model';
import { Subscription } from 'rxjs';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-ucitelia-list',
  templateUrl: './ucitelia-list.component.html',
  styleUrls: ['./ucitelia-list.component.css'],
})
export class UciteliaListComponent implements OnInit {
  @Input()
  ucitelia: Ucitel[] = [];
  private sub: Subscription = new Subscription();

  constructor(private osobySrv: OsobyService) {}

  refreshOsoby(): void {
    this.sub.add(
      this.osobySrv.getTeachers().subscribe((data: Ucitel[]) => {
        this.ucitelia = data;
        console.log(data);
      })
    );
  }

  ngOnInit(): void {
    this.refreshOsoby();
  }
}
