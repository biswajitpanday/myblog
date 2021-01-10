import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioList: IPortfolio[];
  defaultImage: string;

  constructor() { }

  ngOnInit() {
    this.getPortfolio();
    this.defaultImage = "../../../assets/img/portfolio/default-portfolio.jpg"
  }

  goToLink(url: string) {
    if(url != "")
      window.open(url, "_blank");
  }

  getPortfolio() {
    this.portfolioList = [
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
        ends: new Date()
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
        companyLocation: "",
        started: new Date(),
        ends: new Date()
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
        ends: new Date()
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
        ends: new Date()
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
        ends: new Date()
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
        ends: new Date()
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
        ends: new Date()
      },
      {
        title: "reezcom",
        technologies: ["C#" ,"ASP.NET Core", "Android", "Entity Framework Core", "SQL Server"],
        description: "",
        image: "../../../assets/img/portfolio/reezcom.png",
        shortDescription: "",
        siteLink: "https://play.google.com/store/apps/details?id=com.reezcom.android",
        employer: "Independent",
        companyName: "reezcom",
        companyLocation: "Dhaka, Bangladesh",
        started: new Date(),
        ends: new Date()
      },
      {
        title: "dobi",
        technologies: ["C#" ,"ASP.NET Core", "Angular.Js", "Entity Framework", "SQL Server"],
        description: "",
        image: "../../../assets/img/portfolio/dobi.png",
        shortDescription: "",
        siteLink: "",
        employer: "Independent",
        companyName: "dobi",
        companyLocation: "",
        started: new Date(),
        ends: new Date()
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
        ends: new Date()
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
        ends: new Date()
      },
      {
        title: "Reganalytics Auth",
        technologies: ["C#", "ASP.NET MVC", "ASP.NET Web API", "SQL Server", "Entity Framework"],
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "",
        employer: "KAZ Software",
        companyName: "Reganalytics",
        companyLocation: "",
        started: new Date(),
        ends: new Date()
      },
    ]
  }
}

export interface IPortfolio {
  title: string;
  shortDescription: string;
  technologies: string[];
  description: string;
  image: string;
  siteLink: string;
  employer: string;
  companyName: string;
  companyLocation: string;
  started: Date;
  ends: Date;
}