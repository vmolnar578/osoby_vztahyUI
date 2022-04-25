import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObedyListComponent } from './obedy-list.component';

describe('ObedyListComponent', () => {
  let component: ObedyListComponent;
  let fixture: ComponentFixture<ObedyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObedyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObedyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
