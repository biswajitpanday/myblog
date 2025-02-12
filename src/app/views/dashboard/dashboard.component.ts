import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
//import moment = require('moment');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  professionalSkills: IProfessionalSkills[];
  otherSkills: string[];
  totalExperience: number;

  constructor() {
    this.professionalSkills = [];
    this.otherSkills = [];
    this.totalExperience = 0;
  }

  ngOnInit() {
    this.totalExperience =
      new Date().getFullYear() - new Date('2015-06-01').getFullYear();
    this.getOtherSkills();
    this.getProfessionalSkills();
  }

  getOtherSkills() {
    this.otherSkills = [
      'C#',
      'ASP.NET Core',
      '.NET 3.1',
      '.NET 5',
      '.NET 6',
      '.NET 7',
      'ASP.NET MVC',
      'ASP.NET Web API 2',
      'WPF',
      'WCF',
      'Entity Framework',
      'Entity Framework Core',
      'MSSQL',
      'Oracle',
      'LINQ',
      'Log4Net',
      'NUnit',
      'Node.js',
      'Express.js',
      'Hapi',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'JQuery',
      'React',
      'Redux',
      'Angular',
      'Angular.js',
      'Electron',
      'HTML5',
      'CSS',
      'Bootstrap',
      'Trello',
      'Jira',
      'Git',
      'Jenkins',
      'Redis',
      'Xamarin',
      'Software Architecture patterns',
      'Microservices',
      'Onion Architecture',
      'n-tier',
      '3-tire',
      'AWS EC2',
      'AWS S3',
    ];
  }

  getProfessionalSkills() {
    this.professionalSkills = [
      {
        stack: '.NET (C#)',
        yearsOfExperience: moment().diff('2015-06-01', 'years'),
        expertiseLabel: 'Expert',
        levelPercentage: 90,
        col: 'col-md-2 col-sm-6',
      },
      {
        stack: 'ASP.NET',
        yearsOfExperience: moment().diff('2015-06-01', 'years'),
        expertiseLabel: 'Expert',
        levelPercentage: 85,
        col: 'col-md-2 col-sm-6',
      },
      {
        stack: '.NET Core & ASP.Net Core',
        yearsOfExperience: moment().diff('2019-01-01', 'years'),
        expertiseLabel: 'Expert',
        levelPercentage: 80,
        col: 'col-md-4 col-sm-12',
      },
      {
        stack: 'Ts & Js',
        yearsOfExperience: moment().diff('2015-06-01', 'years'),
        expertiseLabel: 'Expert',
        levelPercentage: 90,
        col: 'col-md-2 col-sm-6',
      },
      {
        stack: 'Node.js',
        yearsOfExperience: moment().diff('2017-02-01', 'years'),
        expertiseLabel: 'Intermediate',
        levelPercentage: 80,
        col: 'col-md-2 col-sm-6',
      },
    ];
  }
}

export interface IProfessionalSkills {
  stack: string;
  levelPercentage: number;
  yearsOfExperience: number;
  expertiseLabel: string;
  col: string;
}
