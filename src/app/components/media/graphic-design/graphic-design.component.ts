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

    this.getGraphicDesign();

    this.serverService.getGraphicDesignUpdateListener()
      .subscribe((graphicDesign: GraphicDesign[]) => {
        this.items = graphicDesign;
      });

  }

  getGraphicDesign() {
    this.serverService.getGraphicDesign();
  }


}
