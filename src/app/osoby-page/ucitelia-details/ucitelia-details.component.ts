import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lunch } from 'src/app/models/lunch.model';
import { Teacher } from 'src/app/models/teacher.model';
import { ObedyService } from 'src/app/obedy-page/obedy-page.service';

@Component({
  selector: 'app-ucitelia-details',
  templateUrl: './ucitelia-details.component.html',
  styleUrls: ['./ucitelia-details.component.css'],
})
export class UciteliaDetailsComponent implements OnInit {
  person: Teacher | undefined;
  lunch: Lunch | undefined;
  constructor(private obedyService: ObedyService) {}
  private sub: Subscription = new Subscription();
  @Input()
  set teacher(t: Teacher | undefined) {
    if (t) {
      this.person = t;
    }
  }
  ngOnInit(): void {
    let interval = setInterval(() => {
      this.findLunch();
    }, 500);
    if (this.lunch != undefined) {
      clearInterval(interval);
    }
  }
  findLunch() {
    if (this.person?.lunchId != undefined) {
      this.sub.add(
        this.obedyService.getLunchById(this.person.lunchId).subscribe((data: Lunch) => {
          this.lunch = data;
        })
      );
    }
  }
}
