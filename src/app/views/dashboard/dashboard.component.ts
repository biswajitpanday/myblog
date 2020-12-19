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
        this.otherSkills = ["C#", "ASP.NET Core", "ASP.NET MVC", "ASP.NET Web API 2", "Entity Framework", "MS SQL Server", 
        "Oracle", "LINQ", "Log4Net", "NUnit", "Node.js", "Express.js", "Hapi", "MongoDB", "JavaScript", "TypeScript", 
        "JQuery", "ReactJS", "Redux", "Angular", "Angular.js", "Electron", "HTML5", "Bootstrap", "Trello", "Jira", "Git", "Redis",
        "Xamarin", "Software Architecture patterns", "Microservices", "Onion Architecture", "n-tier", "3-tire", "AWS EC2", "AWS S3"];
    }

    getProfessionalSkills() {
        this.professionalSkills = [
            {
                stack: ".NET (C#)",
                yearsOfExperience: 5,
                expertiseLabel: "Expert",
                levelPercentage: 90,
                col: "col-2"
            },
            {
                stack: "ASP.NET",
                yearsOfExperience: 5,
                expertiseLabel: "Expert",
                levelPercentage: 85,
                col: "col-2"
            },
            {
                stack: ".NET Core & ASP.Net Core",
                yearsOfExperience: 2,
                expertiseLabel: "Expert",
                levelPercentage: 80,
                col: "col-4"
            },
            {
                stack: "JavaScript",
                yearsOfExperience: 5,
                expertiseLabel: "Expert",
                levelPercentage: 90,
                col: "col-2"
            },
            {
                stack: "Node.js",
                yearsOfExperience: 3,
                expertiseLabel: "Intermediate",
                levelPercentage: 80,
                col: "col-2"
            }
        ]
    }
}

export interface IProfessionalSkills {
    stack: string;
    levelPercentage: number;
    yearsOfExperience: number;
    expertiseLabel: string;
    col: string;
}