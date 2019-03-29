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

@NgModule({
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
export class StudentPerformanceModule { }
