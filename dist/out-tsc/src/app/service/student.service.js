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
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
    }
    StudentService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get(environment.endpoint + 'Student').pipe(map(this.extractData));
    };
    StudentService.prototype.getStudentByClassID = function (classID) {
        return this.http.get(environment.endpoint + 'GetStudentByClassID/' + classID).pipe(map(this.extractData));
    };
    // downloadFile(data: Response) {
    //   const blob = new Blob([data], { type: 'application/octet-stream' });
    //   const url= window.URL.createObjectURL(blob);
    //   window.open(url);
    // }
    StudentService.prototype.uploadFile = function (formData) {
        //const frmData = new FormData();
        return this.http.post(environment.endpoint + 'UploadFile', formData)
            .pipe(map(this.extractData));
    };
    StudentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], StudentService);
    return StudentService;
}());
export { StudentService };
//# sourceMappingURL=student.service.js.map