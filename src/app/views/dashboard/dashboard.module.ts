import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DasboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    DasboardRoutingModule,
    RoundProgressModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
