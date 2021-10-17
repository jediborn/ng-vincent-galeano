import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../services/server.services";
import {Subscription} from "rxjs";
import {AboutAchievement} from "../../models/aboutAchievement.model";
import {environment} from "../../../environments/environment";
import {fadeInAnimation} from "../../animations/animations";
import {AboutTools} from "../../models/aboutTools";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation]

})
export class AboutComponent implements OnInit {

  // Achievements
  private aboutAchievements: Subscription;
  achievements: any = [];

  // Web Dev
  private aboutWebDevSubscribe: Subscription;
  webDev: any = [];

  // Graphic Design
  private aboutGraphicDesignSubscribe: Subscription;
  graphicDesign: any = [];

  private selected: any;

  imgUrl = environment.imgUrl;


  constructor(private serverService: ServerService) {
  }

  ngOnInit() {

    this.getAchievements()
    this.getWebDev();
    this.getGraphicDesign();

    this.aboutAchievements = this.serverService.getAchievementsUpdateListener()
      .subscribe((achievements: AboutAchievement[]) => {
        // this.backgroundImg = this.imgUrl + material[0].img;
        this.achievements = achievements;
      });

    this.aboutWebDevSubscribe = this.serverService.getAboutWebDevUpdateListener()
      .subscribe((webDev: AboutTools[]) => {
        // this.backgroundImg = this.imgUrl + material[0].img;
        this.webDev = webDev;
      });

    this.aboutGraphicDesignSubscribe = this.serverService.getAboutGraphicDesignUpdateListener()
      .subscribe((graphicDesign: AboutTools[]) => {
        // this.backgroundImg = this.imgUrl + material[0].img;
        this.graphicDesign = graphicDesign;
      });

  }


  getAchievements() {
    this.serverService.getAboutAchievements();
  }


  getWebDev() {
    this.serverService.getAboutWebDev();
  }


  getGraphicDesign() {
    this.serverService.getAboutGraphicDesign();
  }


  onHover(item) {
    this.selected = item;
  }

  onLeave() {
    this.selected = !this.selected;

  }
}
