import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiaciPageComponent } from './ziaci-page.component';

describe('ZiaciPageComponent', () => {
  let component: ZiaciPageComponent;
  let fixture: ComponentFixture<ZiaciPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiaciPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiaciPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
