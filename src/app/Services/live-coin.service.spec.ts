import { TestBed } from '@angular/core/testing';

import { LiveCoinService } from './live-coin.service';

describe('LiveCoinService', () => {
  let service: LiveCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
