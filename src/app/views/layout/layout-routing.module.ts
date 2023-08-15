import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { RouteConstant } from '../../utility';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: RouteConstant.Dashboard, loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: RouteConstant.About, loadChildren: () => import('../about/about.module').then(m => m.AboutModule) },
            { path: RouteConstant.Timeline, loadChildren: () => import('../timeline/timeline.module').then(m => m.TimelineModule) },
            { path: RouteConstant.Portfolio, loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule) },
            { path: RouteConstant.Tours, loadChildren: () => import('../tours/tours.module').then(m => m.ToursModule) },
            { path: RouteConstant.User, loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
            { path: RouteConstant.TourDetails, loadChildren: () => import('../tour-details/tour-details.module').then(m => m.TourDetailsModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
