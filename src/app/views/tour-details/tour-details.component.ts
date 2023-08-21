import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { AppConstant } from '../../utility/appConstant';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  tourDetailList: ITourDetails[] = [];
  selectedCountryCode?: null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.selectedCountryCode = queryParams['countryCode'];
      console.log(this.selectedCountryCode);
    });

    this.getTourDetails();
    this.setGalleryOptions();
    this.setGalleryImages();
  }

  setGalleryOptions() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        preview: true,
        image: false,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Fade,
        thumbnails: true,
        previewZoom: true
      }
      // {
      //   width: '600px',
      //   height: '400px',
      //   thumbnailsColumns: 4,
      //   imageAnimation: NgxGalleryAnimation.Slide
      // },
      // // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // // max-width 400
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];
  }

  setGalleryImages() {
    let temp: any = [];
    this.tourDetailList?.forEach(element => {
      var img = this.configureImageForGallery(element);
      if (img != null)
        temp.push(img);
    });
    this.galleryImages = temp;
  }

  configureImageForGallery(obj: ITourDetails) {
    if (obj.countryCode !== "" + this.selectedCountryCode)
      return null;
    return {
      small: `../../../assets/img/tours/${obj.countryName}/small/${obj.image}`,
      medium: `../../../assets/img/tours/${obj.countryName}/medium/${obj.image}`,
      big: `../../../assets/img/tours/${obj.countryName}/big/${obj.image}`,
      description: obj.description
    }
  }

  getTourDetails() {
    this.tourDetailList = [
      {
        countryName: AppConstant.bangladesh,
        countryCode: AppConstant.bangladeshCC,
        image: "saintmartin01.jpg",
        description: "SaintMartin Island, Cox's Bazar, Bangladesh",
        year: ""
      },
      {
        countryName: AppConstant.bangladesh,
        countryCode: AppConstant.bangladeshCC,
        image: "moheskhali01.jpg",
        description: "Moheskhali Terminal, Cox's Bazar, Bangladesh",
        year: ""
      },
      {
        countryName: AppConstant.bangladesh,
        countryCode: AppConstant.bangladeshCC,
        image: "bogalake01.jpg",
        description: "Boga Lake, Bandarban, Bangladesh",
        year: ""
      },
      {
        countryName: AppConstant.bangladesh,
        countryCode: AppConstant.bangladeshCC,
        image: "sajekvalley01.jpg",
        description: "Sajek Valley, Khagrachari, Bangladesh",
        year: ""
      },
      {
        countryName: AppConstant.india,
        countryCode: AppConstant.indiaCC,
        image: "pangong01.jpg",
        description: "Pangong Lake, Ladakh, India",
        year: ""
      },
      {
        countryName: AppConstant.thailand,
        countryCode: AppConstant.thailandCC,
        image: "thailand01.jpg",
        description: "",
        year: ""
      },
      {
        countryName: AppConstant.thailand,
        countryCode: AppConstant.thailandCC,
        image: "thailand02.jpg",
        description: "",
        year: ""
      },
      {
        countryName: AppConstant.thailand,
        countryCode: AppConstant.thailandCC,
        image: "thailand03.jpg",
        description: "",
        year: ""
      },
      {
        countryName: AppConstant.thailand,
        countryCode: AppConstant.thailandCC,
        image: "thailand04.jpg",
        description: "",
        year: ""
      }
    ]
  }
}


export interface ITourDetails {
  countryName: string,
  countryCode: string,
  image: string,
  description: string,
  year: string
}