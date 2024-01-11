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
        img: 'assets/images/media/web-dev/Firefly.jpg',
        link: 'http://www.galeanostock.com',
        description: 'Simple WordPress site using SEO to gain more users on my Shutterstock online store.',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
      {
        name: 'PokemonPodium',
        id: '2',
        img: 'assets/images/media/web-dev/charizard_tilt_holo.jpg',
        link: 'https://www.pokemonpodium.com',
        description: 'Simple WordPress site using SEO to gain more users on my eBay store.',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
      {
        name: 'Vidoori Performance Tool',
        id: '3',
        img: 'assets/images/media/web-dev/vidoori.svg',
        link: 'https://youtu.be/mteGv84vp68',
        description: 'This is a product developed in Angular, Node, and ASP.Net Core (C#). I was responsible for designing the front-end using sketch 3. I then developed the front end using Angular 4 (alongside two other front-end developers). The back-end was developed by four developers. I have been able to contribute to the ASP.Net back-end API, as we are rebuilding the back-end architecture.',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
      {
        name: 'The Embedded Entrepreneurship Initiative',
        id: '4',
        img: 'assets/images/media/web-dev/darpa.png',
        link: 'https://eei.darpa.mil',
        description: 'I was able to help another developer complete this simple webpage for The Embedded Entrepreneurship Initiative led by DARPA.',
        icon: 'assets/images/vg/vincent_galeano.svg'
      }
    ];
  }


  getWebDev() {
    // this.serverService.getWebDev();
  }


}
