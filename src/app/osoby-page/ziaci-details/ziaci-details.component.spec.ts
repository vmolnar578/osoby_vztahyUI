import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiaciDetailsComponent } from './ziaci-details.component';

describe('ZiaciDetailsComponent', () => {
  let component: ZiaciDetailsComponent;
  let fixture: ComponentFixture<ZiaciDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiaciDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiaciDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
