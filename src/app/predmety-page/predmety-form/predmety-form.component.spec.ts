import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetyFormComponent } from './predmety-form.component';

describe('PredmetyFormComponent', () => {
  let component: PredmetyFormComponent;
  let fixture: ComponentFixture<PredmetyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
