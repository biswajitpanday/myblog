import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { RouteConstant } from '../../utility';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: RouteConstant.Dashboard, loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: RouteConstant.About, loadChildren: '../about/about.module#AboutModule' },
            { path: RouteConstant.Timeline, loadChildren: '../timeline/timeline.module#TimelineModule' },
            { path: RouteConstant.Portfolio, loadChildren: '../portfolio/portfolio.module#PortfolioModule' },
            { path: RouteConstant.Tours, loadChildren: '../tours/tours.module#ToursModule' },
            { path: RouteConstant.User, loadChildren: '../user/user.module#UserModule' },
            { path: RouteConstant.TourDetails, loadChildren: '../tour-details/tour-details.module#TourDetailsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
