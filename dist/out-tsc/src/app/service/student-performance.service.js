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
// const httpOptions = {
//     headers: new HttpHeaders({
//         'responseType': 'ResponseContentType.Blob',
//         'Content-Type': 'application/vnd.ms-excel'
//     })
// };
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var StudentPerformanceService = /** @class */ (function () {
    function StudentPerformanceService(http) {
        this.http = http;
    }
    StudentPerformanceService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    StudentPerformanceService.prototype.getParamters = function () {
        return this.http.get(environment.endpoint + 'ParameterAttribute').pipe(map(this.extractData));
    };
    StudentPerformanceService.prototype.addPerformance = function (Performance) {
        console.log(JSON.stringify(Performance));
        return this.http.post(environment.endpoint + 'PerformanceCount', JSON.stringify(Performance), httpOptions).pipe(tap(function (Performance) { return console.log("added PerformanceCount w/ id=" + Performance.performID); }), catchError(this.handleError('addPerformanceCount')));
    };
    StudentPerformanceService.prototype.updatePerformance = function (id, Performance) {
        return this.http.put(environment.endpoint + 'PerformanceCount/' + id, JSON.stringify(Performance), httpOptions).pipe(tap(function (_) { return console.log("updated Performance id=" + id); }), catchError(this.handleError('updatePerformance')));
    };
    StudentPerformanceService.prototype.getPerformance = function () {
        return this.http.get(environment.endpoint + 'PerformanceCount').pipe(map(this.extractData));
    };
    StudentPerformanceService.prototype.handleError = function (operation, result) {
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
    StudentPerformanceService.prototype.downloadTemplate = function (classID) {
        httpOptions.headers.set('Access-Control-Allow-Origin', "*");
        return this.http.get(environment.endpoint + 'ExcelDownload/', httpOptions)
            .pipe(map(this.extractData));
    };
    StudentPerformanceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], StudentPerformanceService);
    return StudentPerformanceService;
}());
export { StudentPerformanceService };
//# sourceMappingURL=student-performance.service.js.map