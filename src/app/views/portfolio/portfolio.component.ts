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
    this.defaultImage = "../../../assets/img/default-thumbnail.jpg"
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  getPortfolio() {
    this.portfolioList = [
      {
        title: "Subscriber Verification System (SVS)",
        technologies: ["C#", "ASP.NET Core 2.2", "JavaScript", "JQuery", "Oracle"],
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "https://svsweb.robi.com.bd/",
        employer: "KAZ Software",
        companyName: "Robi",
        companyLocation: "Dhaka, Bangladesh",
        started: new Date(),
        ends: new Date()
      },
      {
        title: "JoyList",
        technologies: ["Node.js", "React", "MongoDb", "AWS EC2", "AWS S3", "AWS Cloud Formation"],
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "",
        employer: "KAZ Software",
        companyName: "JoyList",
        companyLocation: "Dhaka, Bangladesh",
        started: new Date(),
        ends: new Date()
      },
      {
        title: "DairyApplication",
        technologies: ["C#", "ASP.NET","Angular.Js", "ASP.NET","Angular.Js"],
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "",
        employer: "KAZ Software",
        companyName: "Tmr Feeding",
        companyLocation: "Netherlands",
        started: new Date(),
        ends: new Date()
      },
      {
        title: "Shopway",
        technologies: ["Node.js", "Angular 7", "MongoDb", "AWS EC2", "AWS S3", "AWS EBS"],
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "",
        employer: "Independent",
        companyName: "Shopway",
        companyLocation: "Dhaka, Bangladesh",
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