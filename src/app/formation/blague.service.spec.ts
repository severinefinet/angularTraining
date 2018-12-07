import { TestBed } from '@angular/core/testing';

import { BlagueService } from './blague.service';

describe('BlagueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlagueService = TestBed.get(BlagueService);
    expect(service).toBeTruthy();
  });
});
