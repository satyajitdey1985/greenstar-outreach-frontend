var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPerformanceRoutingModule } from './student-performance-routing.module';
import { StudentPerformanceComponent } from "./student-performance.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { SchoolService } from '../service/school.service';
import { StudentService } from '../service/student.service';
import { StudentPerformanceService } from "../service/student-performance.service";
//import { BrowserModule } from '@angular/platform-browser';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
var StudentPerformanceModule = /** @class */ (function () {
    function StudentPerformanceModule() {
    }
    StudentPerformanceModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                FormsModule,
                StudentPerformanceRoutingModule,
                //BrowserModule,
                NgDatepickerModule,
                NgbModule
            ],
            declarations: [StudentPerformanceComponent],
            providers: [CommonService, SchoolService, StudentService, StudentPerformanceService]
        })
    ], StudentPerformanceModule);
    return StudentPerformanceModule;
}());
export { StudentPerformanceModule };
//# sourceMappingURL=student-performance.module.js.map