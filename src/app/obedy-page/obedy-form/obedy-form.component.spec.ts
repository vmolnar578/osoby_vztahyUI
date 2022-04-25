import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObedyFormComponent } from './obedy-form.component';

describe('ObedyFormComponent', () => {
  let component: ObedyFormComponent;
  let fixture: ComponentFixture<ObedyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObedyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObedyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
