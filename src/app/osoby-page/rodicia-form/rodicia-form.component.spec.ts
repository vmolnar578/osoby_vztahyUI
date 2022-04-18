import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodiciaFormComponent } from './rodicia-form.component';

describe('RodiciaFormComponent', () => {
  let component: RodiciaFormComponent;
  let fixture: ComponentFixture<RodiciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodiciaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodiciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
