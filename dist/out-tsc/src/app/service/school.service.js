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
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var SchoolService = /** @class */ (function () {
    function SchoolService(http) {
        this.http = http;
    }
    SchoolService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SchoolService.prototype.getSchools = function () {
        return this.http.get(environment.endpoint + 'Schools').pipe(map(this.extractData));
    };
    SchoolService.prototype.getSchool = function (id) {
        return this.http.get(environment.endpoint + 'Schools/' + id).pipe(map(this.extractData));
    };
    SchoolService.prototype.getSchoolByCity = function (cityId) {
        return this.http.get(environment.endpoint + 'GetSchoolByCity/' + cityId).pipe(map(this.extractData));
    };
    SchoolService.prototype.getClassBySchool = function (schoolID) {
        return this.http.get(environment.endpoint + 'GetClassBySchool/' + schoolID).pipe(map(this.extractData));
    };
    SchoolService.prototype.addSchool = function (School) {
        console.log(School);
        return this.http.post(environment.endpoint + 'Schools', JSON.stringify(School), httpOptions).pipe(tap(function (School) { return console.log("added School w/ id=" + School.schlID); }), catchError(this.handleError('addSchool')));
    };
    SchoolService.prototype.updateSchool = function (id, School) {
        return this.http.put(environment.endpoint + 'Schools/' + id, JSON.stringify(School), httpOptions).pipe(tap(function (_) { return console.log("updated School id=" + id); }), catchError(this.handleError('updateSchool')));
    };
    SchoolService.prototype.deleteSchool = function (id) {
        return this.http.delete(environment.endpoint + 'Schools/' + id, httpOptions).pipe(tap(function (_) { return console.log("deleted School id=" + id); }), catchError(this.handleError('deleteSchool')));
    };
    SchoolService.prototype.handleError = function (operation, result) {
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
    SchoolService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SchoolService);
    return SchoolService;
}());
export { SchoolService };
//# sourceMappingURL=school.service.js.map