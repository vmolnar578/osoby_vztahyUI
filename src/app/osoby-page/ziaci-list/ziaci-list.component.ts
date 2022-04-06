import {Component, Input, OnInit} from '@angular/core';
import { Ziak } from 'src/app/models/ziak.model';

@Component({
  selector: 'app-ziaci-list',
  templateUrl: './ziaci-list.component.html',
  styleUrls: ['./ziaci-list.component.css']
})
export class ZiaciListComponent implements OnInit {
  @Input()
  ziaci: Ziak[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
