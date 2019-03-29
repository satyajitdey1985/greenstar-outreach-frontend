var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidayCalendarComponent } from "./holiday-calendar.component";
var routes = [{
        path: '', component: HolidayCalendarComponent
    }];
var HolidayCalendarRoutingModule = /** @class */ (function () {
    function HolidayCalendarRoutingModule() {
    }
    HolidayCalendarRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], HolidayCalendarRoutingModule);
    return HolidayCalendarRoutingModule;
}());
export { HolidayCalendarRoutingModule };
//# sourceMappingURL=holiday-calendar-routing.module.js.map