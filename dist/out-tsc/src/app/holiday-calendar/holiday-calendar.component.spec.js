import { async, TestBed } from '@angular/core/testing';
import { HolidayCalendarComponent } from './holiday-calendar.component';
describe('HolidayCalendarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HolidayCalendarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HolidayCalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=holiday-calendar.component.spec.js.map