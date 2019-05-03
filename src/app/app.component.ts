import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { HomePage } from "../pages/home/home";
import { BrowserPage } from "../pages/browser/browser";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPage } from '../pages/news/news';

import { BuriramGamesPage } from "../pages/buriram-games/buriram-games";
import { CompetitionPage } from "../pages/competition/competition";
import { ResultPage } from "../pages/result/result";
import { MedalPage } from "../pages/medal/medal";
import { AccommodationPage } from "../pages/accommodation/accommodation";
import { RecommendPage } from "../pages/recommend/recommend";
import { FieldPage } from "../pages/field/field";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any,icon:string,item:string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      // { title: 'Hello Ionic', component: HelloIonicPage },
      // { title: 'My First List', component: ListPage }
      {title: 'หน้าแรก', component:HomePage,icon:"home",item:""},
      {title: 'บุรีรัมย์เกมส์', component:BuriramGamesPage,icon:"football",item:""},
      {title: 'ข้อมูลการแข่งขัน', component:CompetitionPage,icon:"bicycle",item:""},
      {title: 'ผลการแข่งขัน', component:ResultPage,icon:"podium",item:""},
      {title: 'สรุปเหรียญรางวัล', component:MedalPage,icon:"medal",item:""},
      {title: 'ข่าวประชาสัมพันธ์', component:BrowserPage,icon:"megaphone",item:"ข่าวประชาสัมพันธ์"},
      {title: 'สนามแข่งขัน', component:FieldPage,icon:"map",item:""},
      {title: 'ระบบจองคิวรถ รับ–ส่ง ', component:BrowserPage,icon:"bus",item:"ระบบจองคิวรถ"},
      {title: 'สถานที่พัก', component:AccommodationPage,icon:"home",item:""},
      {title: 'แนะนำจังหวัดบุรีรัมย์', component:RecommendPage,icon:"heart",item:""},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, {item:page.item});
  }
}
