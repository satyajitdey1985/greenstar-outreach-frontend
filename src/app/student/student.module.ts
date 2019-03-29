import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from "./student.component";
import { StudentService } from "../service/student.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ],
  declarations: [StudentComponent],
  providers: [StudentService]
})
export class StudentModule { }
