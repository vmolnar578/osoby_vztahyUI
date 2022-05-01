import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lunch } from 'src/app/models/lunch.model';
import { ObedyService } from '../obedy-page.service';
import { AuthService } from 'src/app/login-page/login-page.service';

@Component({
  selector: 'app-obedy-list',
  templateUrl: './obedy-list.component.html',
  styleUrls: ['./obedy-list.component.css'],
})
export class ObedyListComponent implements OnInit {
  @Input()
  lunches: Lunch[] = [];
  sortedLunches: Lunch[] = [];
  private sub: Subscription = new Subscription();

  constructor(private obedySrv: ObedyService, public authService: AuthService) {}
  @Output()
  editLunch: EventEmitter<Lunch> = new EventEmitter<Lunch>();
  edit(lunch: Lunch): void {
    this.editLunch.emit(lunch);
    setTimeout(() => {
      this.refreshLunches();
    }, 5000);
  }
  ngOnInit(): void {
    if (this.authService.isUserSignedin()) {
      this.refreshLunches();
    }
  }
  refreshLunches(): void {
    this.sub.add(
      this.obedySrv.getLunches().subscribe((data: Lunch[]) => {
        this.lunches = data;
        this.lunches.forEach((element) => {
          if (element.id === 1) {
            this.sortedLunches[1] = element;
          }
          if (element.id === 2) {
            this.sortedLunches[2] = element;
          }
          if (element.id === 3) {
            this.sortedLunches[3] = element;
          }
          if (element.id === 4) {
            this.sortedLunches[4] = element;
          }
          if (element.id === 5) {
            this.sortedLunches[5] = element;
          }
        });
      })
    );
  }
}
