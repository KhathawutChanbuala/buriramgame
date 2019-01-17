import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from "../pages/home/home";
import { NewsPage } from "../pages/news/news";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserPage } from '../pages/browser/browser';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { BuriramGamesPage } from '../pages/buriram-games/buriram-games';
import { CompetitionPage } from '../pages/competition/competition';
import { ResultPage } from '../pages/result/result';
import { MedalPage } from '../pages/medal/medal';
import { AccommodationPage } from '../pages/accommodation/accommodation';
import { RecommendPage } from '../pages/recommend/recommend';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    NewsPage,
    BrowserPage,
    BuriramGamesPage,
    CompetitionPage,
    ResultPage,
    MedalPage,
    AccommodationPage,
    RecommendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    NewsPage,
    BrowserPage,
    BuriramGamesPage,
    CompetitionPage,
    ResultPage,
    MedalPage,
    AccommodationPage,
    RecommendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
