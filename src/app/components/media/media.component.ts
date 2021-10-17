import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {ServerService} from "../../services/server.services";
import {Post} from "../../models/Post.model";


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],

})
export class MediaComponent implements OnInit {
  img: string = '';
  imgUrl = environment.imgUrl;

  constructor() {
  }

  ngOnInit() {

  }


}
