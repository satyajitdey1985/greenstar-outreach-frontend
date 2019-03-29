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
import { SchoolService } from "../service/school.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from "../service/common.service";
var SchoolComponent = /** @class */ (function () {
    function SchoolComponent(api, modalService, commonAPI) {
        this.api = api;
        this.modalService = modalService;
        this.commonAPI = commonAPI;
        this.schools = [];
        this.schoolForm = {};
    }
    SchoolComponent.prototype.ngOnInit = function () {
        this.getSchool();
        this.getCity();
    };
    SchoolComponent.prototype.getSchool = function () {
        var _this = this;
        this.api.getSchools().subscribe(function (data) {
            _this.schools = data;
        });
    };
    SchoolComponent.prototype.deleteSchool = function (id) {
        var _this = this;
        if (confirm("Do you want to delete?")) {
            this.api.deleteSchool(id).subscribe(function (data) {
                _this.getSchool();
            });
        }
    };
    SchoolComponent.prototype.open = function (content, data) {
        var _this = this;
        if (data) {
            this.schoolForm = data;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed";
        });
    };
    SchoolComponent.prototype.saveOrUpdateSchool = function (schoolData) {
        var _this = this;
        console.log(schoolData);
        if (!schoolData.schlID) {
            this.api.addSchool(schoolData).subscribe(function (data) {
                _this.getSchool();
            });
        }
        else {
            this.api.updateSchool(schoolData.schlID, schoolData).subscribe(function (data) { _this.getSchool(); });
        }
        this.schoolForm = {};
        this.modalService.dismissAll();
        // this.getSchool();
    };
    SchoolComponent.prototype.getCity = function () {
        var _this = this;
        this.commonAPI.getCity().subscribe(function (data) {
            _this.cityList = data;
        });
    };
    SchoolComponent = __decorate([
        Component({
            selector: 'app-school',
            templateUrl: './school.component.html',
            styleUrls: ['./school.component.scss']
        }),
        __metadata("design:paramtypes", [SchoolService, NgbModal, CommonService])
    ], SchoolComponent);
    return SchoolComponent;
}());
export { SchoolComponent };
//# sourceMappingURL=school.component.js.map