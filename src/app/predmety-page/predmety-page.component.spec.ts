/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PredmetyPageComponent } from './predmety-page.component';

describe('PredmetyPageComponent', () => {
  let component: PredmetyPageComponent;
  let fixture: ComponentFixture<PredmetyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
