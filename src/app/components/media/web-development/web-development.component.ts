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

    this.getWebDev();


    this.serverService.getWebDevUpdateListener()
      .subscribe((webDev: WebDev[]) => {
        this.items = webDev;
      });
  }


  getWebDev() {
    this.serverService.getWebDev();
  }


}
