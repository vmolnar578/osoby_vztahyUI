import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObedyPageComponent } from './obedy-page.component';

describe('ObedyPageComponent', () => {
  let component: ObedyPageComponent;
  let fixture: ComponentFixture<ObedyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObedyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObedyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
