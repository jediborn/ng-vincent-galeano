import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../services/server.services";
import {Post} from "../../models/Post.model";
import {HomeArt} from "../../models/HomeArt.model";
import {Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {fadeInAnimation} from "../../animations/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {

  imgUrl = environment.imgUrl;

  frontEnd = this.imgUrl + "/images/home/projects/front-end.svg";
  graphicDesign = this.imgUrl + "/images/home/projects/graphic-design.svg";



  constructor() {
  }

  ngOnInit() {
  }



}

