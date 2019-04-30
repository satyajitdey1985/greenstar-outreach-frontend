import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCalendarComponent } from './holiday-calendar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule,NgbDate } from '@ng-bootstrap/ng-bootstrap';

describe('HolidayCalendarComponent', () => {
  let component: HolidayCalendarComponent;
  let fixture: ComponentFixture<HolidayCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayCalendarComponent ],
      imports:[FormsModule,HttpClientModule,NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
