import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';
describe('CommonService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CommonService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=common.service.spec.js.map