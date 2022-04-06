/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OsobyPageComponent } from './osoby-page.component';

describe('OsobyPageComponent', () => {
  let component: OsobyPageComponent;
  let fixture: ComponentFixture<OsobyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsobyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
