import { HolidayCalendarModule } from './holiday-calendar.module';

describe('HolidayCalendarModule', () => {
  let holidayCalendarModule: HolidayCalendarModule;

  beforeEach(() => {
    holidayCalendarModule = new HolidayCalendarModule();
  });

  it('should create an instance', () => {
    expect(holidayCalendarModule).toBeTruthy();
  });
});
