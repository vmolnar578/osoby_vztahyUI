import { TestBed } from '@angular/core/testing';

import { PredmetyService } from './predmety-page.service';

describe('PredmetyPageService', () => {
  let service: PredmetyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredmetyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
