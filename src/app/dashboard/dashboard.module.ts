import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GreenstarComponent } from "../greenstar/greenstar.component";
import { GreenstarModule } from "../greenstar/greenstar.module";
import { GreenstarService } from '../service/greenstar.service';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        GreenstarModule        
    ],
    declarations: [
        DashboardComponent,
        GreenstarComponent
      
    ],
    providers:[GreenstarService]
})
export class DashboardModule {}
