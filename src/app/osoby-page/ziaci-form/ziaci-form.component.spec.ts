import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiaciFormComponent } from './ziaci-form.component';

describe('ZiaciFormComponent', () => {
  let component: ZiaciFormComponent;
  let fixture: ComponentFixture<ZiaciFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiaciFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiaciFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
