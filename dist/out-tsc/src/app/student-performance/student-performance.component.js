var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CommonService } from "../service/common.service";
import { SchoolService } from '../service/school.service';
import { StudentService } from '../service/student.service';
import { StudentPerformanceService } from '../service/student-performance.service';
var StudentPerformanceComponent = /** @class */ (function () {
    function StudentPerformanceComponent(commonAPI, schoolAPI, studentApi, studentPerformanceApi) {
        this.commonAPI = commonAPI;
        this.schoolAPI = schoolAPI;
        this.studentApi = studentApi;
        this.studentPerformanceApi = studentPerformanceApi;
        this.studentResult = [];
    }
    StudentPerformanceComponent.prototype.ngOnInit = function () {
        this.getState();
    };
    StudentPerformanceComponent.prototype.getState = function () {
        var _this = this;
        this.commonAPI.getState().subscribe(function (data) {
            _this.stateList = data;
        });
    };
    StudentPerformanceComponent.prototype.getCityByStateID = function (stateId) {
        var _this = this;
        this.commonAPI.getCityByStateID(stateId).subscribe(function (data) {
            _this.cityList = data;
        });
    };
    StudentPerformanceComponent.prototype.getSchoolByCity = function (cityId) {
        var _this = this;
        this.schoolAPI.getSchoolByCity(cityId).subscribe(function (data) {
            _this.schoolList = data;
        });
    };
    StudentPerformanceComponent.prototype.getClassBySchool = function (schoolID) {
        var _this = this;
        this.schoolAPI.getClassBySchool(schoolID).subscribe(function (data) {
            _this.classDetailsList = data;
        });
    };
    StudentPerformanceComponent.prototype.getStudentByClassID = function (classID) {
        var _this = this;
        this.studentApi.getStudentByClassID(classID).subscribe(function (data) {
            _this.studentList = data;
        });
        this.getParamters();
    };
    StudentPerformanceComponent.prototype.getParamters = function () {
        var _this = this;
        this.studentPerformanceApi.getParamters().subscribe(function (data) {
            _this.paramAttrList = data;
        });
    };
    StudentPerformanceComponent.prototype.updateSelectedParamValueChange = function (event, isChecked) {
        this.targetCheckBoxName = event.target.name;
        var performData = {
            performID: 0,
            paramID: 0,
            studID: 0,
            point: false,
            performDate: new Date(Date.now())
        };
        var x = this.targetCheckBoxName.split("_");
        performData.point = isChecked;
        performData.paramID = +x[2];
        performData.studID = +x[1];
        performData.performDate = this.performanceDate;
        this.studentResult.push(performData);
        console.log(this.studentResult);
        console.log(performData.point + "," + performData.paramID + "," + performData.studID + "," + performData.performDate);
        //this.saveOrUpdatePerformance(this.performData);
    };
    StudentPerformanceComponent.prototype.getPerformance = function () {
        var _this = this;
        this.studentPerformanceApi.getPerformance().subscribe(function (data) {
            _this.studentResult = data;
        });
    };
    StudentPerformanceComponent.prototype.saveOrUpdatePerformance = function (performanceDataList) {
        var _this = this;
        //console.log(performanceDataList);
        // if (!performanceDataList[0].PerformID) {
        this.studentPerformanceApi.addPerformance(performanceDataList).subscribe(function (data) {
            _this.getPerformance();
        });
        // }
        // else {
        //   this.studentPerformanceApi.updatePerformance(performanceData.performID, performanceData).subscribe((data) => { this.getPerformance(); })
        // }
        //performanceDataList={};
    };
    StudentPerformanceComponent.prototype.upload = function (files) {
        console.log(files);
        if (files.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        this.studentApi.uploadFile(formData).subscribe(function (data) {
            console.log(data);
        });
        // const uploadReq = new HttpRequest('POST', `api/upload`, formData, {
        //   reportProgress: true,
        // });
        // this.http.request(uploadReq).subscribe(event => {
        //   if (event.type === HttpEventType.UploadProgress)
        //     this.progress = Math.round(100 * event.loaded / event.total);
        //   else if (event.type === HttpEventType.Response)
        //     this.message = event.body.toString();
        // });
    };
    StudentPerformanceComponent = __decorate([
        Component({
            selector: 'app-student-performance',
            templateUrl: './student-performance.component.html',
            styleUrls: ['./student-performance.component.scss']
        }),
        __metadata("design:paramtypes", [CommonService,
            SchoolService,
            StudentService,
            StudentPerformanceService])
    ], StudentPerformanceComponent);
    return StudentPerformanceComponent;
}());
export { StudentPerformanceComponent };
//# sourceMappingURL=student-performance.component.js.map