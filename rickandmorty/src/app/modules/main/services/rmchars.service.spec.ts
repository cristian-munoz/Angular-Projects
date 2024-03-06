import { TestBed } from '@angular/core/testing';

import { RMCharsService } from './rmchars.service';

describe('RMCharsService', () => {
  let service: RMCharsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RMCharsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
