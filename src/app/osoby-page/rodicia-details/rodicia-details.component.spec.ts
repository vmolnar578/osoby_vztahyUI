import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodiciaDetailsComponent } from './rodicia-details.component';

describe('RodiciaDetailsComponent', () => {
  let component: RodiciaDetailsComponent;
  let fixture: ComponentFixture<RodiciaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodiciaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodiciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
