import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/models/parent.model';
import { OsobyService } from '../osoby-page.service';

@Component({
  selector: 'app-rodicia-page',
  templateUrl: './rodicia-page.component.html',
  styleUrls: ['./rodicia-page.component.css'],
})
export class RodiciaPageComponent implements OnInit {
  parents: Parent[] = [];
  role = sessionStorage.getItem('role');
  toggleForm(): void {
    let form = document.getElementById('form');
    form?.classList.toggle('hidden');
    form?.classList.toggle('flex');
    document.getElementById('add')?.classList.toggle('text-[#0c2970cc]');
  }
  constructor(private osobyService: OsobyService) {}
  parentShowing?: Parent;
  ngOnInit(): void {}
  parentEditing?: Parent;
  refresh(): void {
    this.osobyService.getParents().subscribe((p) => {
      this.parents = p;
    });
  }
  pushParent(p: Parent): void {
    this.osobyService.createParent(p).subscribe(() => {
      this.refresh();
    });
  }
  updateParent(p: Parent): void {
    this.osobyService.updateParent(p.id, p).subscribe(() => {
      this.refresh();
    });
  }

  editParentFromList(p: Parent): void {
    this.parentEditing = p;
  }
  showParentFromList(p: Parent): void {
    this.parentShowing = p;
  }
  deleteParentFromList(p: Parent): void {
    this.osobyService.deleteParent(p.id).subscribe(() => {
      this.refresh();
    });
  }
}
