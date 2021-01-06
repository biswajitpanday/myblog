import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RoundProgressModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
