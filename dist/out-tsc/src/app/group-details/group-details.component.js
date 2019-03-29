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
import { GroupService } from '../service/group.service';
var GroupDetailsComponent = /** @class */ (function () {
    function GroupDetailsComponent(commonAPI, schoolAPI, groupAPI) {
        this.commonAPI = commonAPI;
        this.schoolAPI = schoolAPI;
        this.groupAPI = groupAPI;
    }
    GroupDetailsComponent.prototype.ngOnInit = function () {
        this.getState();
    };
    GroupDetailsComponent.prototype.getState = function () {
        var _this = this;
        this.commonAPI.getState().subscribe(function (data) {
            _this.stateList = data;
        });
    };
    GroupDetailsComponent.prototype.getCityByStateID = function (stateId) {
        var _this = this;
        this.commonAPI.getCityByStateID(stateId).subscribe(function (data) {
            _this.cityList = data;
        });
    };
    GroupDetailsComponent.prototype.getSchoolByCity = function (cityId) {
        var _this = this;
        this.schoolAPI.getSchoolByCity(cityId).subscribe(function (data) {
            _this.schoolList = data;
        });
    };
    GroupDetailsComponent.prototype.getClassBySchool = function (schoolID) {
        var _this = this;
        this.schoolAPI.getClassBySchool(schoolID).subscribe(function (data) {
            _this.classDetailsList = data;
        });
    };
    GroupDetailsComponent.prototype.getGroupsDetails = function (classID) {
        var _this = this;
        this.groupAPI.getGroups(classID).subscribe(function (data) {
            console.log(data);
            _this.groupsDetailsWithMembers = data;
        });
    };
    GroupDetailsComponent.prototype.addGroup = function (groupName) {
        var _this = this;
        var groupDetails = {
            groupName: "",
            groupID: 0,
            classID: 0
        };
        groupDetails.groupName = groupName;
        groupName.classID = this.selectedClassID;
        this.groupAPI.addGroup(groupDetails).subscribe(function (data) {
            _this.getGroupsDetails(_this.selectedClassID);
        });
    };
    GroupDetailsComponent = __decorate([
        Component({
            selector: 'app-group-details',
            templateUrl: './group-details.component.html',
            styleUrls: ['./group-details.component.scss']
        }),
        __metadata("design:paramtypes", [CommonService, SchoolService, GroupService])
    ], GroupDetailsComponent);
    return GroupDetailsComponent;
}());
export { GroupDetailsComponent };
//# sourceMappingURL=group-details.component.js.map