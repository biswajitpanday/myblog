import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourDetailsRoutingModule } from './tour-details-routing.module';
import { TourDetailsComponent } from './tour-details.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    TourDetailsRoutingModule,
    NgxGalleryModule
  ],
  declarations: [TourDetailsComponent]
})
export class TourDetailsModule { }