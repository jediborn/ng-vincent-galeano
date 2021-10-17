import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MaterialModule} from "./material.module";


import {HttpClientModule} from "@angular/common/http";
import {ServerService} from "./services/server.services";


import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MediaComponent } from './components/media/media.component';
import { WebDevelopmentComponent } from './components/media/web-development/web-development.component';
import { GraphicDesignComponent } from './components/media/graphic-design/graphic-design.component';
import { CardItemComponent } from './components/shared/card-item/card-item.component';
import { MediaDialogComponent } from './components/shared/media-dialog/media-dialog.component';



import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MediaComponent,
    WebDevelopmentComponent,
    GraphicDesignComponent,
    CardItemComponent,
    MediaDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    ServerService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
