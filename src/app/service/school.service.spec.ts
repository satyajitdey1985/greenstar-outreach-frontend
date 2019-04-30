import { TestBed } from '@angular/core/testing';

import { SchoolService } from './school.service';
import {HttpClientModule} from '@angular/common/http';

describe('SchoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  
    imports:[HttpClientModule]
  }));
  it('should be created', () => {
    const service: SchoolService = TestBed.get(SchoolService);
    expect(service).toBeTruthy();
  });
});
