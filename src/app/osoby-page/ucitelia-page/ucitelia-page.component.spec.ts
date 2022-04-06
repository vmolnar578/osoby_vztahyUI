import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UciteliaPageComponent } from './ucitelia-page.component';

describe('UciteliaPageComponent', () => {
  let component: UciteliaPageComponent;
  let fixture: ComponentFixture<UciteliaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UciteliaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UciteliaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
