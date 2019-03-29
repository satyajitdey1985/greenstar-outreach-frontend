import { TestBed } from '@angular/core/testing';
import { GreenstarService } from './greenstar.service';
describe('GreenstarService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GreenstarService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=greenstar.service.spec.js.map