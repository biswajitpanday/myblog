import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConstant } from './utility';

const routes: Routes = [
    { path: '', loadChildren: './views/layout/layout.module#LayoutModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }