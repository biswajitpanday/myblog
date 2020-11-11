import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourDetailsRoutingModule } from './tour-details-routing.module';
import { TourDetailsComponent } from './tour-details.component';

@NgModule({
  imports: [
    CommonModule,
    TourDetailsRoutingModule
  ],
  declarations: [TourDetailsComponent]
})
export class TourDetailsModule { }