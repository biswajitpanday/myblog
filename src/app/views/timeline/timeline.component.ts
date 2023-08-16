import { Component, OnInit } from '@angular/core';
import { IPortfolio } from '../portfolio/portfolio.component';
import { format, compareAsc } from 'date-fns'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timelineList?: ITimeline[];
  constructor() { }

  ngOnInit() {
    this.getTimeline();
  }


  getTimeline() {
    this.timelineList = [
      {
        organizationName: "Optimizely",
        organizationOrigin: "United States",
        organizationHeadOffices: ["United States", "Dhaka, Bangladesh", "Amsterdam, Netherlands"],
        organizationCityMine: "Dhaka",
        organizationCountryMine: "Bangladesh",
        designation: "Senior Developer",
        isOutOfBusiness: false,
        role: ROLE.fullStack,
        joiningDate: new Date("2023-04-01T00:00:01"),
        isCurrentlyWorking: true,
        leavingDate: null,
        technologyUsedLong: ["C#", "ASP.NET", "MSSQL", "LINQ", "TypeScript", "Angular", "React", "WCF", "Node.js"],
        technologyUsedShort: ["C#", "ASP.NET", "MSSQL", "LINQ", "TypeScript", "Angular", "React", "WCF", "Node.js"],
        responsibilities: [
          "Develop and maintain B2B Commerce platforms to meet business requirements.",
          "Collaborate with cross-functional international teams from different time-zone, including designers, product managers, and other developers to gather requirements and ensure smooth project execution.",
          "Write clean, efficient, scalable code, debug and troubleshoot issues using best practices and coding standards.",
          "Conduct code reviews to ensure code quality, maintainability, and adherence to established guidelines.",
          "Mentor and provide guidance to fellow developers fostering their growth and success.",
          "Scrum/Agile, REST, Software Architecture Patterns, Object-oriented, Asynchronous, Clean Code."
        ],
        keyProjects: [
          {
            title: "Optimizely B2B Commerce",
            technologies: ["C#", "ASP.NET", "MSSQL", "LINQ", "TypeScript", "Angular", "React", "WCF", "Node.js", "IIS"],
            description: "",
            image: "../../../assets/img/portfolio/optimizely.png",
            shortDescription: "Online sale of goods or services between businesses",
            siteLink: "https://www.optimizely.com/optimization-glossary/b2b-ecommerce/",
            employer: "Optimizely",
            companyName: "Optimizely",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2023-04-01"),
            ends: new Date(),
            operational: true
          },
        ]
      },
      {
        organizationName: "KAZ Software",
        organizationOrigin: "Bangladesh",
        organizationHeadOffices: ["Dhaka, Bangladesh", "Greyerzstrasse, Switzerland"],
        organizationCityMine: "Dhaka",
        organizationCountryMine: "Bangladesh",
        designation: "Senior Software Engineer",
        isOutOfBusiness: false,
        role: ROLE.fullStack,
        joiningDate: new Date("2022-06-01T00:00:01"),
        isCurrentlyWorking: false,
        leavingDate: new Date("2023-03-31T23:59:59"),
        technologyUsedLong: ["C#", "ASP.NET", ".NET Core", "SQL", "NoSQL", "LINQ", "TypeScript", "Angular", "React", "Node.js", "AWS", "Azure"],
        technologyUsedShort: ["C#", "ASP.NET", ".NET Core", "SQL", "NoSQL", "LINQ", "TypeScript", "Angular", "React", "Node.js", "AWS", "Azure"],
        responsibilities: [
          "Led & mentored software engineers, providing technical guidance & fostering a collaborative work environment.",
          "Design, develop, troubleshoot, debug, and automate high-quality mission-critical software source code using modern software development languages and tools anywhere in the software stack.",
          "Manage the full lifecycle of software projects. This includes planning, executing, and monitoring projects from start to finish, as well as ensuring that projects meet requirements and deadlines.",
          "Collaborate with stakeholders, including product managers and UX/UI designers, to shape requirements and improve the software development process as a full-stack software engineer.",
        ],
        keyProjects: [
          {
            title: "Devensoft",
            technologies: ["C#", "ASP.NET", ".NET MVC", "MSSQL", "LINQ", "TypeScript", "Angular", "Azure"],
            description: "Simplify complex mergers and acquisitions (M&A) with streamlined workflows to improve collaboration, increase the success rate, and gain better visibility into the entire deal lifecycle.",
            image: "../../../assets/img/portfolio/devensoft.png",
            shortDescription: "Elevate team with full-cycle M&A software",
            siteLink: "https://www.devensoft.com/",
            employer: "KAZ Software",
            companyName: "Devensoft",
            companyLocation: "USA",
            started: new Date("2022-02-01"),
            ends: new Date(),
            operational: true
          },
          {
            title: "Reganalytics",
            technologies: ["C#", ".NET 6", "Web API", "MSSQL", "TypeScript", "React", "Angular", "Aws", "Microservices", "Docker"],
            description: "Reganalytics is a company that provides software and services to help businesses comply with global trade, transfer pricing, and tax regulations",
            image: "../../../assets/img/portfolio/reganalytics.png",
            shortDescription: "Global trade, transfer pricing & tax regulations",
            siteLink: "http://www.reganalytics.com/",
            employer: "KAZ Software",
            companyName: "Reganalytics",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2021/06/01"),
            ends: new Date(),
            operational: true
          },
          {
            title: "webEvv",
            technologies: ["C#", ".NET Core 3.1", "Web API", "DynamoDB", "TypeScript", "React", "Flutter", "Aws", "Clean Architecture", "Serverless"],
            description: "",
            image: "../../../assets/img/portfolio/webevv.png",
            shortDescription: "The Best EVV Software Solutions",
            siteLink: "https://www.webevv.com/",
            employer: "KAZ Software",
            companyName: "webEvv",
            companyLocation: "USA",
            started: new Date("2021-09-01"),
            ends: new Date(),
            operational: true
          },
          {
            title: "Alarm App",
            technologies: ["C#", "NET 5.0", "Angular", "MySQL", "Android (Java, Kotlin)", "AWS S3", "AWS Lambda", "AWS RDS"],
            description: "",
            image: "../../../assets/img/portfolio/alarmApp.png",
            shortDescription: "",
            siteLink: "https://play.google.com/store/apps/details?id=alarmapp.bdrcs.org",
            employer: "KAZ Software",
            companyName: "Bangladesh Red Crescent Society",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2021-03-01"),
            ends: new Date(),
            operational: true
          },
          {
            title: "Subscriber Verification System (SVS)",
            technologies: ["C#", "ASP.NET Core 2.2", "JavaScript", "JQuery", "Oracle"],
            description: "",
            image: "../../../assets/img/portfolio/robi.png",
            shortDescription: "",
            siteLink: "https://svsweb.robi.com.bd/",
            employer: "KAZ Software",
            companyName: "Robi",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2020-05-01"),
            ends: new Date(),
            operational: true
          },
          {
            title: "JoyList",
            technologies: ["Node.js", "React", "MongoDb", "AWS EC2", "AWS S3", "AWS Cloud Formation"],
            description: "",
            image: "../../../assets/img/portfolio/joilist.png",
            shortDescription: "",
            siteLink: "https://www.joylist.io/",
            employer: "KAZ Software",
            companyName: "JoyList",
            companyLocation: "USA",
            started: new Date(),
            ends: new Date(),
            operational: false
          },
          {
            title: "DairyApplication",
            technologies: ["C#", "ASP.NET Web API", "Angular.Js", "SQL Server", "MongoDb", "Entity Framework", "AWS EC2", "AWS S3"],
            description: "",
            image: "../../../assets/img/portfolio/dairyApplications.png",
            shortDescription: "",
            siteLink: "https://www.dairyapplications.com/",
            employer: "KAZ Software",
            companyName: "Tmr Feeding",
            companyLocation: "Netherlands",
            started: new Date(),
            ends: new Date(),
            operational: false
          },
          {
            title: "EnCue",
            technologies: ["C#", "ASP.NET Web API 2", "Angular.Js", "Entity Framework", "SQL Server", "AWS EC2", "AWS S3", "Xamarin"],
            description: "",
            image: "../../../assets/img/portfolio/encue.png",
            shortDescription: "",
            siteLink: "https://www.encuebyoctava.com/",
            employer: "KAZ Software",
            companyName: "EnCue",
            companyLocation: "",
            started: new Date(),
            ends: new Date(),
            operational: true
          },
          {
            title: "OpiGateWay",
            technologies: ["C#", "ASP.NET Web API", "Angular.Js", "MongoDb", "Entity Framework", "Electron", "Twilio Voice"],
            description: "",
            image: "../../../assets/img/portfolio/opiGateWay.png",
            shortDescription: "",
            siteLink: "https://opi.vrigateway.com/",
            employer: "KAZ Software",
            companyName: "VRI Gateway",
            companyLocation: "",
            started: new Date(),
            ends: new Date(),
            operational: true
          },
          {
            title: "here'n'now",
            technologies: ["C#", "ASP.NET Web API", "Angular.Js", "SQL Server", "Xamarin", "Entity Framework", "Firebase"],
            description: "",
            image: "../../../assets/img/portfolio/hnn.png",
            shortDescription: "",
            siteLink: "https://play.google.com/store/apps/details?id=com.hnnapp.android",
            employer: "KAZ Software",
            companyName: "here'n'now",
            companyLocation: "",
            started: new Date(),
            ends: new Date(),
            operational: false
          },
          {
            title: "World Tax Analyzer (WTA)",
            technologies: ["C#", "ASP.NET MVC", "Knockout.Js", "SQL Server", "Link To SQL"],
            description: "",
            image: "../../../assets/img/portfolio/regfollower.png",
            shortDescription: "",
            siteLink: "https://www.worldtaxanalyser.com/",
            employer: "KAZ Software",
            companyName: "Reganalytics",
            companyLocation: "",
            started: new Date(),
            ends: new Date(),
            operational: true
          },
          {
            title: "Transfer Pricing Analyzer (TPA)",
            technologies: ["C#", "ASP.NET MVC", "Knockout.Js", "SQL Server", "Link To SQL"],
            description: "",
            image: "../../../assets/img/portfolio/regfollower.png",
            shortDescription: "",
            siteLink: "",
            employer: "KAZ Software",
            companyName: "Reganalytics",
            companyLocation: "",
            started: new Date(),
            ends: new Date(),
            operational: true
          },
          {
            title: "Reganalytics Auth",
            technologies: ["C#", "ASP.NET MVC", "ASP.NET Web API", "SQL Server", "Entity Framework"],
            description: "",
            image: "../../../assets/img/portfolio/reganalytics.png",
            shortDescription: "",
            siteLink: "https://www.reganalytics.com/",
            employer: "KAZ Software",
            companyName: "Reganalytics",
            companyLocation: "",
            started: new Date(),
            ends: new Date(),
            operational: false
          },
        ]
      },
      {
        organizationName: "Chorki Limited",
        organizationOrigin: "Bangladesh",
        organizationHeadOffices: ["Dhaka, Bangladesh"],
        organizationCityMine: "Dhaka",
        organizationCountryMine: "Bangladesh",
        isOutOfBusiness: true,
        designation: "Software Engineer",
        role: ROLE.fullStack,
        joiningDate: new Date("2015-06-01T00:00:01"),
        isCurrentlyWorking: false,
        leavingDate: new Date("2016-05-31T23:59:59"),
        technologyUsedLong: ["PHP", "Laravel", "JavaScript", "AngularJs", "MySQL", "MongoDB", "Node.js"],
        technologyUsedShort: ["PHP", "Laravel", "JavaScript", "AngularJs", "MySQL", "MongoDB", "Node.js"],
        responsibilities: [
          "Create quality code, software components, and features while ensuring thorough testing and debugging.",
          "Work collaboratively with software engineers, designers, and stakeholders to contribute effectively to team discussions and achieve project goals."
        ],
        keyProjects: [
          {
            title: "Notification Hub",
            technologies: ["JavaScript", "RabbitMQ", "Socket.io", "Node.js", "MongoDB", "GCM"],
            description: "",
            image: "../../../assets/img/portfolio/chorki.png",
            shortDescription: "",
            conciseSummary: "Designed and developed a versatile Notification Hub, enabling seamless server-to-web, Android, and iOS notification delivery. (JavaScript, RabbitMQ, Socket.io, Node.js, MongoDB, GCM)",
            siteLink: "",
            employer: "Chorki Limited",
            companyName: "Chorki Limited",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2015-06-01"),
            ends: new Date("2015-10-31"),
            operational: false
          },
          {
            title: "News Aggregator",
            technologies: ["PHP", "MySQL"],
            description: "",
            image: "../../../assets/img/portfolio/chorki.png",
            shortDescription: "",
            conciseSummary: "Developed a news aggregator tool to improve News search. (PHP, MySQL)",
            siteLink: "",
            employer: "Chorki Limited",
            companyName: "Chorki Limited",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2015-11-01"),
            ends: new Date("2016-03-31"),
            operational: false
          },
          {
            title: "Ad-Network",
            technologies: ["JavaScript", "Laravel,", "MySQL"],
            description: "",
            image: "../../../assets/img/portfolio/chorki.png",
            shortDescription: "",
            conciseSummary: "Contributed to developing the Ad-Network and an e-commerce platform. (JavaScript, Laravel, MySQL)",
            siteLink: "",
            employer: "Chorki Limited",
            companyName: "Chorki Limited",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2016-04-01"),
            ends: new Date("2016-05-31"),
            operational: false
          },
        ]
      },
      {
        organizationName: "Brain Station-23",
        organizationOrigin: "Bangladesh",
        organizationHeadOffices: ["Dhaka, Bangladesh"],
        organizationCityMine: "Dhaka",
        organizationCountryMine: "Bangladesh",
        isOutOfBusiness: false,
        designation: "Intern",
        role: ROLE.frontend,
        joiningDate: new Date("2014-09-01T00:00:01"),
        isCurrentlyWorking: false,
        leavingDate: new Date("2014-12-31T23:59:59"),
        technologyUsedLong: ["C#", "Asp.Net MVC", "JavaScript", "AngularJs", "MSSQL", "MongoDB", "Node.js"],
        technologyUsedShort: ["C#", "ASP.Net", "JavaScript", "AngularJs", "MSSQL", "MongoDB", "Node.js", "JQuery", "Entity Framework", "HTML", "CSS"],
        responsibilities: [
          "Feature implementation and Bug fixing on a Social & Professional networking site named Whooza.",
          "Actively worked on a Management Portal of Bangladesh College of Physicians and Surgeons (BCPS)"
        ],
        keyProjects: [
          {
            title: "Whooza",
            technologies: ["JavaScript", "Socket.io", "Node.js", "MongoDB", "HTML", "CSS"],
            description: "A Combination of Social & Professional site.",
            image: "../../../assets/img/portfolio/whooza.png",
            shortDescription: "A Combination of Social and Professional site.",
            conciseSummary: "Assist to implement new features and fixing bugs in existing features on a Social & Professional networking site named Whooza.",
            siteLink: "",
            employer: "Brain Station-23",
            companyName: "Whooza",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2014-09-01"),
            ends: new Date("2014-10-31"),
            operational: false
          },
          {
            title: "BCPS Management Portal",
            technologies: ["JavaScript", "Socket.io", "Node.js", "MongoDB", "HTML", "CSS"],
            description: "Bangladesh College of Physicians and Surgeons has been the pioneer in developing post-graduate medical education in this country. Historically, the College bears a heritage to College of Physicians and Surgeons of Pakistan of which it was the eastern wing. Following the independence of Bangladesh, the College was recreated as a statutory body by a Presidential order, later on ratified by an act of the parliament, to steer postgraduate medical education of a vastly populated, poorly resourced and war-ravaged country.",
            image: "../../../assets/img/portfolio/bcps.png",
            shortDescription: "Management Portal of Bangladesh College of Physicians and Surgeons (BCPS)",
            conciseSummary: "Worked as a team player to implement new features and fixing bugs in new and existing features of the Management Portal of Bangladesh College of Physicians and Surgeons (BCPS)",
            siteLink: "https://exams.bcps.edu.bd/Home/Index",
            employer: "Brain Station-23",
            companyName: "Bangladesh College of Physicians and Surgeons (BCPS)",
            companyLocation: "Dhaka, Bangladesh",
            started: new Date("2014-11-01"),
            ends: new Date("2014-12-31"),
            operational: true
          },
        ]
      },

    ]
  }
}

export enum ROLE {
  fullStack = "FULLSTACK",
  backend = "BACKEND",
  frontend = "frontend"
}

export interface ITimeline {
  organizationName: string;
  organizationOrigin: string;
  organizationHeadOffices: string[];
  organizationCountryMine: string;
  organizationCityMine: string;
  isOutOfBusiness?: boolean;

  designation: string;
  role: typeof ROLE | string;

  joiningDate: Date,
  isCurrentlyWorking: boolean;
  leavingDate?: Date | null,

  technologyUsedShort: string[],
  technologyUsedLong: string[],

  responsibilities: string[],
  keyProjects: IPortfolio[]
}