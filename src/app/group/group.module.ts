import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from "./group.component";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
