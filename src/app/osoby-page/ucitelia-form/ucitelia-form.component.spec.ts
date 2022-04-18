import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UciteliaFormComponent } from './ucitelia-form.component';

describe('UciteliaFormComponent', () => {
  let component: UciteliaFormComponent;
  let fixture: ComponentFixture<UciteliaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UciteliaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UciteliaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
