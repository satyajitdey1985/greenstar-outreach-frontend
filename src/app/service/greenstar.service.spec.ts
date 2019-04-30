import { TestBed } from '@angular/core/testing';

import { GreenstarService } from './greenstar.service';
import {HttpClientModule} from '@angular/common/http';

describe('GreenstarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: GreenstarService = TestBed.get(GreenstarService);
    expect(service).toBeTruthy();
  });
});
