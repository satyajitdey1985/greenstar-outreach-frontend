var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayCalendarRoutingModule } from './holiday-calendar-routing.module';
import { HolidayCalendarComponent } from "./holiday-calendar.component";
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { HolidayCalendarService } from "../service/holiday-calendar.service";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
var HolidayCalendarModule = /** @class */ (function () {
    function HolidayCalendarModule() {
    }
    HolidayCalendarModule = __decorate([
        NgModule({
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
    ], HolidayCalendarModule);
    return HolidayCalendarModule;
}());
export { HolidayCalendarModule };
//# sourceMappingURL=holiday-calendar.module.js.map