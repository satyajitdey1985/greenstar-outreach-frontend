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
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var GreenstarService = /** @class */ (function () {
    function GreenstarService(http) {
        this.http = http;
    }
    GreenstarService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    GreenstarService.prototype.getGrrenStar = function (paramID, classID) {
        return this.http.get(environment.endpoint + 'GetStarByClass/classID/' + classID + '/attributeID/' + paramID).pipe(map(this.extractData));
    };
    GreenstarService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], GreenstarService);
    return GreenstarService;
}());
export { GreenstarService };
//# sourceMappingURL=greenstar.service.js.map