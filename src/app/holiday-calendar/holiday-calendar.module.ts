import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalendarRoutingModule } from './holiday-calendar-routing.module';
import { HolidayCalendarComponent } from "./holiday-calendar.component";
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import { HolidayCalendarService } from "../service/holiday-calendar.service";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    HolidayCalendarRoutingModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  declarations: [HolidayCalendarComponent],
  providers: [HolidayCalendarService]
})
export class HolidayCalendarModule { }
