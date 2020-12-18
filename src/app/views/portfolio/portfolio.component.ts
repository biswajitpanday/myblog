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

  getPortfolio() {
    this.portfolioList = [
      {
        title: "Subscriber Verification System (SVS)",
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "",
        companyName: "Robi",
        companyLocation: "Dhaka, Bangladesh",
        started: new Date(),
        ends: new Date()
      },
      {
        title: "DairyApplication",
        description: "",
        image: "",
        shortDescription: "",
        siteLink: "",
        companyName: "Tmr Feeding",
        companyLocation: "Netherlands",
        started: new Date(),
        ends: new Date()
      }
    ]
  }

}

export interface IPortfolio {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  siteLink: string;
  companyName: string;
  companyLocation: string;
  started: Date;
  ends: Date;
}
