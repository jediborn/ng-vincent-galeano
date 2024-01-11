import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../../services/server.services";
import {GraphicDesign} from "../../../models/graphic-design";
import {fadeInAnimation} from "../../../animations/animations";

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css'],
  animations: [fadeInAnimation]
})
export class GraphicDesignComponent implements OnInit {


  items: any = [];


  constructor(private serverService: ServerService) {
  }

  ngOnInit() {

    // this.getGraphicDesign();

    // this.serverService.getGraphicDesignUpdateListener()
    //   .subscribe((graphicDesign: GraphicDesign[]) => {
    //     this.items = graphicDesign;
    //   });
    this.items = [
{
        name: 'ShutterStock',
        id: '1',
        img: 'assets/images/media/graphic-design/st.jpeg',
        link: 'https://www.shutterstock.com/g/Galeano',
        description: '',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
      {
        name: 'PicFair',
        id: '2',
        img: 'assets/images/media/graphic-design/pf.jpeg',
        link: 'https://galeanostock.picfair.com/',
        description: '',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
      {
        name: 'Behance',
        id: '3',
        img: 'assets/images/media/graphic-design/be.png',
        link: 'https://www.behance.net/vincentgaleano',
        description: '',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
      {
        name: 'Etsy',
        id: '4',
        img: 'assets/images/media/graphic-design/e.png',
        link: 'https://galeanostock.etsy.com',
        description: '',
        icon: 'assets/images/vg/vincent_galeano.svg'
      },
    ];
  }

  getGraphicDesign() {
    // this.serverService.getGraphicDesign();
  }


}
