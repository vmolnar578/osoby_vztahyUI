import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UciteliaListComponent } from './ucitelia-list.component';

describe('UciteliaListComponent', () => {
  let component: UciteliaListComponent;
  let fixture: ComponentFixture<UciteliaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UciteliaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UciteliaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
