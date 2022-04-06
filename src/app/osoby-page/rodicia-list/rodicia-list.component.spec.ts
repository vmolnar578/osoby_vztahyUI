import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodiciaListComponent } from './rodicia-list.component';

describe('RodiciaListComponent', () => {
  let component: RodiciaListComponent;
  let fixture: ComponentFixture<RodiciaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodiciaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodiciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
