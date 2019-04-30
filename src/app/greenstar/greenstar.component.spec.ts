import { async, ComponentFixture, TestBed,getTestBed } from '@angular/core/testing';


import { GreenstarComponent } from './greenstar.component';
import { GreenstarService } from '../service/greenstar.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('GithubApiService', () => {
  let injector: TestBed;
  let service: GreenstarService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GreenstarService]
    });
    injector = getTestBed();
    service = injector.get(GreenstarService);
    httpMock = injector.get(HttpTestingController);
  });
  it('should return list of performance details', () => {
    const dummyUsers = [
      { login: 'John' },
      { login: 'Doe' }
    ];

    service.getGrrenStar(1,1).subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyUsers);
    });

    // const req = httpMock.expectOne(`${service.API_URL}/users`);
    // expect(req.request.method).toBe("GET");
    // req.flush(dummyUsers);
  });
});

 

