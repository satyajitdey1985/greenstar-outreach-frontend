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
import { HolidayCalendarService } from "../service/holiday-calendar.service";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var HolidayCalendarComponent = /** @class */ (function () {
    function HolidayCalendarComponent(api, modalService) {
        this.api = api;
        this.modalService = modalService;
        this.holidays = [];
        this.holidayForm = {};
    }
    HolidayCalendarComponent.prototype.ngOnInit = function () {
        this.getHolidays();
    };
    HolidayCalendarComponent.prototype.getHolidays = function () {
        var _this = this;
        this.holidays = [];
        this.api.getHolidays().subscribe(function (data) {
            _this.holidays = data;
            //this.dataSource.data = data;
        });
    };
    HolidayCalendarComponent.prototype.deleteHoliday = function (id) {
        var _this = this;
        if (confirm("Do you want to delete?")) {
            this.api.deleteHoliday(id).subscribe(function (data) {
                _this.getHolidays();
            });
        }
    };
    HolidayCalendarComponent.prototype.saveOrUpdateHoliday = function (holidayData) {
        if (!holidayData.holidayID) {
            this.api.addHoliday(holidayData).subscribe(function (data) { });
        }
        else {
            this.api.updateHoliday(holidayData.id, holidayData).subscribe(function (data) { });
        }
        this.holidayForm = {};
        this.modalService.dismissAll();
    };
    HolidayCalendarComponent.prototype.open = function (content, data) {
        var _this = this;
        if (data)
            this.holidayForm = data;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HolidayCalendarComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HolidayCalendarComponent = __decorate([
        Component({
            selector: 'app-holiday-calendar',
            templateUrl: './holiday-calendar.component.html',
            styleUrls: ['./holiday-calendar.component.scss']
        }),
        __metadata("design:paramtypes", [HolidayCalendarService,
            NgbModal])
    ], HolidayCalendarComponent);
    return HolidayCalendarComponent;
}());
export { HolidayCalendarComponent };
//# sourceMappingURL=holiday-calendar.component.js.map