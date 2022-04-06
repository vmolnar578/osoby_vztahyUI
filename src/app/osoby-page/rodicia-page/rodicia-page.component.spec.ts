import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodiciaPageComponent } from './rodicia-page.component';

describe('RodiciaPageComponent', () => {
  let component: RodiciaPageComponent;
  let fixture: ComponentFixture<RodiciaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodiciaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodiciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
