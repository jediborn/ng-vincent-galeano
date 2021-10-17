import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {MediaComponent} from "./components/media/media.component";
import {GraphicDesignComponent} from "./components/media/graphic-design/graphic-design.component";
import {WebDevelopmentComponent} from "./components/media/web-development/web-development.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "media",
    component: MediaComponent
  },
  {
    path: "media/web-development",
    component: WebDevelopmentComponent
  },
  {
    path: "media/graphic-design",
    component: GraphicDesignComponent
  },
  {
    path: "**",
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
