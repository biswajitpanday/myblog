import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioList?: IPortfolio[];
  defaultImage?: string;

  constructor() { }

  ngOnInit() {
    this.getPortfolio();
    this.defaultImage = "../../../assets/img/portfolio/default-portfolio.jpg"
  }

  goToLink(url: string) {
    if (url != "")
      window.open(url, "_blank");
  }

  getPortfolio() {
    this.portfolioList = [
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
        started: new Date("2023/04/01"),
        ends: new Date(),
        operational: true
      },
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
        started: new Date("2022/02/01"),
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
        started: new Date("2021/09/01"),
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
        started: new Date("2021/03/01"),
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
        started: new Date("2020/05/01"),
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
        title: "Shopway",
        technologies: ["Node.js", "Angular 7", "MongoDb", "AWS EC2", "AWS S3", "AWS EBS"],
        description: "",
        image: "../../../assets/img/portfolio/shopway.png",
        shortDescription: "",
        siteLink: "https://apps.apple.com/us/app/shopwaybd/id1462448277/",
        employer: "Independent",
        companyName: "Shopway",
        companyLocation: "Dhaka, Bangladesh",
        started: new Date(),
        ends: new Date(),
        operational: false
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
        title: "reezcom",
        technologies: ["C#", "ASP.NET Core", "Android", "Entity Framework Core", "SQL Server"],
        description: "",
        image: "../../../assets/img/portfolio/reezcom.png",
        shortDescription: "",
        siteLink: "https://play.google.com/store/apps/details?id=com.reezcom.android",
        employer: "Independent",
        companyName: "reezcom",
        companyLocation: "Dhaka, Bangladesh",
        started: new Date(),
        ends: new Date(),
        operational: false
      },
      {
        title: "dobi",
        technologies: ["C#", "ASP.NET Core", "Angular.Js", "Entity Framework", "SQL Server"],
        description: "",
        image: "../../../assets/img/portfolio/dobi.png",
        shortDescription: "",
        siteLink: "",
        employer: "Independent",
        companyName: "dobi",
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
      {
        title: "Whooza",
        technologies: ["JavaScript", "Socket.io", "Node.js", "MongoDB", "HTML", "CSS"],
        description: "A Combination of Social & Professional site.",
        image: "",
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
  }
}

export interface IPortfolio {
  title: string;
  shortDescription: string;
  description: string;
  conciseSummary?: string;
  technologies: string[];
  image: string;
  siteLink: string;
  employer: string;
  companyName: string;
  companyLocation: string;
  started: Date;
  ends: Date;
  operational?: boolean,
}