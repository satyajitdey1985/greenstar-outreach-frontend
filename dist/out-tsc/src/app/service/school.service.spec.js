import { TestBed } from '@angular/core/testing';
import { SchoolService } from './school.service';
describe('SchoolService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SchoolService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=school.service.spec.js.map