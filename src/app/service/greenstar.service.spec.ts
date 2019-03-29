import { TestBed } from '@angular/core/testing';

import { GreenstarService } from './greenstar.service';

describe('GreenstarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreenstarService = TestBed.get(GreenstarService);
    expect(service).toBeTruthy();
  });
});
