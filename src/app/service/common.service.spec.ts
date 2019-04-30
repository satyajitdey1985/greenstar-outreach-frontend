import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  RouterTestingModule
} from '@angular/router/testing';

describe('CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  
    imports:[FormsModule,HttpClientModule,RouterTestingModule]
  }));

  // it('should be created', () => {
  //   const service: CommonService = TestBed.get(CommonService);
  //   expect(service).toBeTruthy();
  // });
});
