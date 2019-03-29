import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateRoutingModule } from "./state-routing.module";
import { StateComponent } from "./state.component";

@NgModule({
  imports: [
    CommonModule,
    StateRoutingModule
  ],
  declarations: [StateComponent]
})
export class StateModule { }
