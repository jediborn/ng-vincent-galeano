import {Injectable} from "@angular/core";
import {HttpHeaders, HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs/Rx'; // this line rises a tslint err
import 'rxjs/add/operator/map';
import {Post} from "../models/Post.model";
import {HomeArt} from "../models/HomeArt.model";
import {Subject} from "rxjs";
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {AboutAchievement} from "../models/aboutAchievement.model";
import {WebDev} from "../models/web-dev";
import {AboutTools} from "../models/aboutTools";

const apiURL = environment.apiUrl;

const BACK_END_URL = apiURL + '/posts';
const MATERIALS = apiURL + '/materials'
const HOMEART = apiURL + '/home-art';
const aboutAchievments = apiURL + '/about';
const aboutWebDevelopment = apiURL + '/about/web-dev';
const aboutGraphicDesignRoute = apiURL + '/about/graphics';
const webDev = apiURL + '/web-dev';
const graphicDesign = apiURL + '/graphic-design';


@Injectable()
export class ServerService {


  // TODO remove this demo stuffs
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  // home phone
  private homeArts: HomeArt[] = [];
  private homeArtsUpdated = new Subject<HomeArt[]>();

  // about achieve content
  private aboutAchievements: AboutAchievement[] = [];
  private aboutAchievementUpdated = new Subject<AboutAchievement[]>();

  // about web dev content
  private aboutWebDev: AboutTools[] = [];
  private aboutWebDevUpdated = new Subject<AboutTools[]>();

  // about graphic design content
  private aboutGraphicDesign: AboutTools[] = [];
  private aboutGraphicDesignUpdated = new Subject<AboutTools[]>();

  // web dev content
  private webDev: WebDev[] = [];
  private webDevUpdated = new Subject<WebDev[]>();

  // Graphic Design content
  private graphicDesign: WebDev[] = [];
  private graphicDesignUpdated = new Subject<WebDev[]>();


  constructor(private http: HttpClient) {

  }


  // home Background
  getPosts() {
    this.http.get<{ message: string, posts: any }>(MATERIALS)
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            name: post.name,
            id: post._id,
            img: post.img
          }
        });
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }


  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }


  // home Background
  getHomeArt() {
    this.http.get<{ message: string, posts: any }>(HOMEART)
      .pipe(map(postData => {


        return postData.posts.map(post => {
          return {
            title: post.title,
            id: post._id,
            img: post.img
          }
        });

      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.homeArtsUpdated.next([...this.posts]);
      });
  }

  getHomeArtUpdateListener() {
    return this.homeArtsUpdated.asObservable();
  }


  // About
  getAboutAchievements() {
    this.http.get<{ message: string, posts: any }>(aboutAchievments)
      .pipe(map(aboutData => {


        return aboutData.posts.map(aboutAchievement => {
          return {
            name: aboutAchievement.name,
            id: aboutAchievement._id,
            img: aboutAchievement.img,
            link: aboutAchievement.link,
            year: aboutAchievement.year,
          }
        });

      }))
      .subscribe((transformedPosts) => {
        this.aboutAchievements = transformedPosts;
        this.aboutAchievementUpdated.next([...this.aboutAchievements]);
      });
  }


  getAchievementsUpdateListener() {
    return this.aboutAchievementUpdated.asObservable();
  }

  // About Web Dev
  getAboutWebDev() {
    this.http.get<{ message: string, posts: any }>(aboutWebDevelopment)
      .pipe(map(aboutWebData => {


        return aboutWebData.posts.map(aboutWebDev => {
          return {
            name: aboutWebDev.name,
            id: aboutWebDev._id,
            img: aboutWebDev.img,
            link: aboutWebDev.link,
          }
        });

      }))
      .subscribe((transformedPosts) => {
        this.aboutWebDev = transformedPosts;
        this.aboutWebDevUpdated.next([...this.aboutWebDev]);
      });
  }


  getAboutWebDevUpdateListener() {
    return this.aboutWebDevUpdated.asObservable();
  }


  // About Graphic Design
  getAboutGraphicDesign() {
    this.http.get<{ message: string, posts: any }>(aboutGraphicDesignRoute)
      .pipe(map(aboutGraphicDesignData => {


        return aboutGraphicDesignData.posts.map(aboutGraphicDesign => {
          return {
            name: aboutGraphicDesign.name,
            id: aboutGraphicDesign._id,
            img: aboutGraphicDesign.img,
            link: aboutGraphicDesign.link,
          }
        });

      }))
      .subscribe((transformedPosts) => {
        this.aboutGraphicDesign = transformedPosts;
        this.aboutGraphicDesignUpdated.next([...this.aboutGraphicDesign]);
      });
  }


  getAboutGraphicDesignUpdateListener() {
    return this.aboutGraphicDesignUpdated.asObservable();
  }


  // Web Dev
  getWebDev() {
    this.http.get<{ message: string, posts: any }>(webDev)
      .pipe(map(webDev => {


        return webDev.posts.map(webDev => {
          return {
            name: webDev.name,
            id: webDev._id,
            img: webDev.img,
            link: webDev.link,
            description: webDev.description,
            icon: webDev.icon
          }
        });

      }))
      .subscribe((transformedPosts) => {
        this.webDev = transformedPosts;
        this.webDevUpdated.next([...this.webDev]);
      });
  }


  getWebDevUpdateListener() {
    return this.webDevUpdated.asObservable();
  }


  // Web Dev
  getGraphicDesign() {
    this.http.get<{ message: string, posts: any }>(graphicDesign)
      .pipe(map(graphicDesign => {


        return graphicDesign.posts.map(graphicDesign => {
          return {
            name: graphicDesign.name,
            id: graphicDesign._id,
            img: graphicDesign.img,
            link: graphicDesign.link,
            description: graphicDesign.description,
            icon: graphicDesign.icon
          }
        });

      }))
      .subscribe((transformedPosts) => {
        this.graphicDesign = transformedPosts;
        this.graphicDesignUpdated.next([...this.graphicDesign]);
      });
  }


  getGraphicDesignUpdateListener() {
    return this.graphicDesignUpdated.asObservable();
  }

}
