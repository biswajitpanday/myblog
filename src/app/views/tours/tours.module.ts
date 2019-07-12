import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';

@NgModule({
  imports: [
    CommonModule,
    ToursRoutingModule
  ],
  declarations: [ToursComponent]
})
export class ToursModule { }
