import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiaciListComponent } from './ziaci-list.component';

describe('ZiaciListComponent', () => {
  let component: ZiaciListComponent;
  let fixture: ComponentFixture<ZiaciListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiaciListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiaciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
