import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from "./school.component";
import { SchoolService } from '../service/school.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonService } from "../service/common.service";

@NgModule({
  imports: [
    CommonModule,
    SchoolRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [SchoolComponent],
  providers:[SchoolService,CommonService]
})
export class SchoolModule { }
