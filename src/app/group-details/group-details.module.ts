import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GroupDetailsRoutingModule } from './group-details-routing.module';
import { GroupDetailsComponent } from './group-details.component';
import { GroupService } from '../service/group.service';

@NgModule({
  imports: [
    CommonModule,
    GroupDetailsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [GroupDetailsComponent],
  providers: [GroupService]
})
export class GroupDetailsModule { }
