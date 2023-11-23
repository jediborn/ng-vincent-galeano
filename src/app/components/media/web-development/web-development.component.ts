import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../../services/server.services";
import {WebDev} from "../../../models/web-dev";
import {fadeInAnimation} from "../../../animations/animations";

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css'],
  animations: [fadeInAnimation]

})
export class WebDevelopmentComponent implements OnInit {
  items: any = [];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {

    // this.getWebDev();


    // this.serverService.getWebDevUpdateListener()
    //   .subscribe((webDev: WebDev[]) => {
    //     this.items = webDev;
    //   });


    this.items = [
      {
        name: 'GaleanoStock',
        id: '1',
        img: 'https://drive.google.com/uc?export=view&id=16gowgGouA8iPc5zA2IrjnKuwC-T33dLl',
        link: 'http://www.galeanostock.com',
        description: 'Simple WordPress site using SEO to gain more users on my Shutterstock online store.',
        icon: 'https://drive.google.com/uc?export=view&id=15TyfjU9mMuq7ySOrPD2n-8BYTnQzSXdv'
      },
      {
        name: 'PokemonPodium',
        id: '2',
        img: 'https://drive.google.com/uc?export=view&id=1NYJmalSaIH4Tc6OekzARweU6NShy-ebF',
        link: 'http://www.pokemonpodium.com',
        description: 'Simple WordPress site using SEO to gain more users on my eBay store.',
        icon: 'https://drive.google.com/uc?export=view&id=15TyfjU9mMuq7ySOrPD2n-8BYTnQzSXdv'
      },
      {
        name: 'Vidoori Performance Tool',
        id: '3',
        img: 'https://drive.google.com/uc?export=view&id=1PmYDvNiiDl_av_u7lWQscprf-21heIj_',
        link: 'https://youtu.be/mteGv84vp68',
        description: 'This is a product developed in Angular, Node, and ASP.Net Core (C#). I was responsible for designing the front-end using sketch 3. I then developed the front end using Angular 4 (alongside two other front-end developers). The back-end was developed by four developers. I have been able to contribute to the ASP.Net back-end API, as we are rebuilding the back-end architecture.',
        icon: 'https://drive.google.com/uc?export=view&id=15TyfjU9mMuq7ySOrPD2n-8BYTnQzSXdv'
      },
      {
        name: 'The Embedded Entrepreneurship Initiative',
        id: '4',
        img: 'https://drive.google.com/uc?export=view&id=1mWuvPNclEvvwNHN74nPkeqYHE5ga8DKA',
        link: 'https://eei.darpa.mil',
        description: 'I was able to help another developer complete this simple webpage for The Embedded Entrepreneurship Initiative led by DARPA.',
        icon: 'https://drive.google.com/uc?export=view&id=15TyfjU9mMuq7ySOrPD2n-8BYTnQzSXdv'
      }
    ];
  }


  getWebDev() {
    this.serverService.getWebDev();
  }


}
