import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UciteliaDetailsComponent } from './ucitelia-details.component';

describe('UciteliaDetailsComponent', () => {
  let component: UciteliaDetailsComponent;
  let fixture: ComponentFixture<UciteliaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UciteliaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UciteliaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
