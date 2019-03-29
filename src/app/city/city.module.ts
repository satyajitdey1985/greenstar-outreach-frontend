import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from "./city.component";

@NgModule({
  imports: [
    CommonModule,
    CityRoutingModule
  ],
  declarations: [CityComponent]
})
export class CityModule { }
