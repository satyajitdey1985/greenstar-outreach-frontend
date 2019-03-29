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
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.getAll = function () {
        return this.http.get('assets/data/people.json');
    };
    SearchService.prototype.search = function (q) {
        if (!q || q === '*') {
            q = '';
        }
        else {
            q = q.toLowerCase();
        }
        return this.getAll().pipe(map(function (data) { return data
            .map(function (item) { return !!localStorage['person' + item.id] ?
            JSON.parse(localStorage['person' + item.id]) : item; })
            .filter(function (item) { return JSON.stringify(item).toLowerCase().includes(q); }); }));
    };
    SearchService.prototype.get = function (id) {
        return this.getAll().pipe(map(function (all) {
            if (localStorage['person' + id]) {
                return JSON.parse(localStorage['person' + id]);
            }
            return all.find(function (e) { return e.id === id; });
        }));
    };
    SearchService.prototype.save = function (person) {
        localStorage['person' + person.id] = JSON.stringify(person);
    };
    SearchService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SearchService);
    return SearchService;
}());
export { SearchService };
var Address = /** @class */ (function () {
    function Address(obj) {
        this.street = obj && obj.street || null;
        this.city = obj && obj.city || null;
        this.state = obj && obj.state || null;
        this.zip = obj && obj.zip || null;
    }
    return Address;
}());
export { Address };
var Person = /** @class */ (function () {
    function Person(obj) {
        this.id = obj && Number(obj.id) || null;
        this.name = obj && obj.name || null;
        this.phone = obj && obj.phone || null;
        this.address = obj && obj.address || null;
    }
    return Person;
}());
export { Person };
//# sourceMappingURL=holiday-calendar.service.js.map