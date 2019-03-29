var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
//const endpoint = 'https://localhost:44393/api/';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var HolidayCalendarService = /** @class */ (function () {
    function HolidayCalendarService(http) {
        this.http = http;
    }
    HolidayCalendarService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    HolidayCalendarService.prototype.getHolidays = function () {
        return this.http.get(environment.endpoint + 'HolidayCalendar').pipe(map(this.extractData));
    };
    HolidayCalendarService.prototype.getHoliday = function (id) {
        return this.http.get(environment.endpoint + 'HolidayCalendar/' + id).pipe(map(this.extractData));
    };
    HolidayCalendarService.prototype.addHoliday = function (HolidayCalendar) {
        console.log(HolidayCalendar);
        return this.http.post(environment.endpoint + 'HolidayCalendar', JSON.stringify(HolidayCalendar), httpOptions).pipe(tap(function (HolidayCalendar) { return console.log("added HolidayCalendar w/ id=" + HolidayCalendar.id); }), catchError(this.handleError('addHolidayCalendar')));
    };
    HolidayCalendarService.prototype.updateHoliday = function (id, HolidayCalendar) {
        return this.http.put(environment.endpoint + 'HolidayCalendar/' + id, JSON.stringify(HolidayCalendar), httpOptions).pipe(tap(function (_) { return console.log("updated HolidayCalendar id=" + id); }), catchError(this.handleError('updateHolidayCalendar')));
    };
    HolidayCalendarService.prototype.deleteHoliday = function (id) {
        return this.http.delete(environment.endpoint + 'HolidayCalendar/' + id, httpOptions).pipe(tap(function (_) { return console.log("deleted HolidayCalendar id=" + id); }), catchError(this.handleError('deleteHolidayCalendar')));
    };
    HolidayCalendarService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    HolidayCalendarService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HolidayCalendarService);
    return HolidayCalendarService;
}());
export { HolidayCalendarService };
//# sourceMappingURL=holiday-calendar.service.js.map