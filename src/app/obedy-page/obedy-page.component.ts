import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lunch } from '../models/lunch.model';
import { ObedyService } from './obedy-page.service';

@Component({
  selector: 'app-obedy-page',
  templateUrl: './obedy-page.component.html',
  styleUrls: ['./obedy-page.component.css'],
})
export class ObedyPageComponent implements OnInit {
  lunches: Lunch[] = [];
  private sub: Subscription = new Subscription();
  toggleForm(): void {
    let form = document.getElementById('form');
    form?.classList.toggle('hidden');
    form?.classList.toggle('flex');
    document.getElementById('add')?.classList.toggle('text-[#0c2970cc]');
  }
  constructor(private obedyService: ObedyService) {}
  ngOnInit(): void {}
  lunchEditing?: Lunch;
  refresh(): void {
    this.obedyService.getLunches().subscribe((s) => {
      this.lunches = s;
    });
  }
  updateLunch(s: Lunch): void {
    this.obedyService.updateLunch(s.id, s).subscribe(() => {
      this.refresh();
    });
  }

  editLunchFromList(s: Lunch): void {
    this.lunchEditing = s;
  }
}
