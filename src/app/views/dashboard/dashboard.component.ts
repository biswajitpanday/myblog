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
    professionalSkills: IProfessionalSkills[];
    otherSkills: string[];

    constructor() {
        this.professionalSkills = [];
        this.otherSkills = [];
    }

    ngOnInit() {
        this.dotnet = 80;
        this.javascript = 90;
        this.nodejs = 70;
        this.android = 60;
        this.getSkills();
        this.getProfessionalSkills();
    }

    getSkills () {
        this.otherSkills = ["C#", "ASP.NET Core", "ASP.NET MVC", "ASP.NET Web API", "Entity Framework", "MSSQL Server", "Oracle", "LINQ", "Log4Net", "NUnit", "Node.js", "Express.js", "Hapi", "MongoDB", "JavaScript", "TypeScript", "JQuery", "ReactJS", "Redux", "Angular", "Angular.js", "Electron", "HTML5", "Bootstrap", "Trello", "Jira", "Git", "Xamarin", "Design Patterns", "Microservices", "Onion Architecture", "n-tier", "3-tire"];
    }

    getProfessionalSkills() {
        this.professionalSkills = [
            {
                stack: ".NET (C#)",
                yearsOfExperience: 5,
                expertiseLabel: "Expert",
                levelPercentage: 90
            },
            {
                stack: "ASP.NET",
                yearsOfExperience: 5,
                expertiseLabel: "Expert",
                levelPercentage: 85
            },
            {
                stack: ".NET Core & ASP.Net Core",
                yearsOfExperience: 2,
                expertiseLabel: "Expert",
                levelPercentage: 80
            },
            {
                stack: "JavaScript",
                yearsOfExperience: 6,
                expertiseLabel: "Expert",
                levelPercentage: 90
            },
            {
                stack: "Node.js",
                yearsOfExperience: 3,
                expertiseLabel: "Intermediate",
                levelPercentage: 80
            }
        ]
    }
}

export interface IProfessionalSkills {
    stack: string;
    levelPercentage: number;
    yearsOfExperience: number;
    expertiseLabel: string;
}