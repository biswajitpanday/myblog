import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    dotnet: any;
    javascript: any;
    nodejs: any;
    android: any;

    constructor() {
    }

    ngOnInit() {
        this.dotnet = 80;
        this.javascript = 95;
        this.nodejs = 70;
        this.android = 60;
    }
}
