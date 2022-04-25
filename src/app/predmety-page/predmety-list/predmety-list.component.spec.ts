import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetyListComponent } from './predmety-list.component';

describe('PredmetyListComponent', () => {
  let component: PredmetyListComponent;
  let fixture: ComponentFixture<PredmetyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
