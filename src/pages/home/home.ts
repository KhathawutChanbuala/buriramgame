import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Alert } from 'ionic-angular';
import { BrowserPage } from "../browser/browser";
import { BuriramGamesPage } from '../buriram-games/buriram-games';
import { CompetitionPage } from '../competition/competition';
import { ResultPage } from '../result/result';
import { MedalPage } from '../medal/medal';
import { AccommodationPage } from '../accommodation/accommodation';
import { RecommendPage } from '../recommend/recommend';
import { FieldPage } from "../field/field";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  platformOS: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
    if (this.platform.is('ios')) {
      this.platformOS='ios';
      //alert('ios');
    }
    if (this.platform.is('android')) {
      this.platformOS='android';
      //alert('android');
    }
    

  }
  openPage(event, item) {
    this.navCtrl.push(BrowserPage, {
      item: item
    });
  }

  openBuriramGamesPage(event, item){
    this.navCtrl.push(BuriramGamesPage, {
      item: item
    });
  }
  openCompetition(event, item){
    this.navCtrl.push(CompetitionPage, {
      item: item
    });
  }
  openResult(event, item){
    this.navCtrl.push(ResultPage, {
      item: item
    });
  }
  openMedal(event, item){
    this.navCtrl.push(MedalPage, {
      item: item
    });
  }
  openAccommodatione(event, item){
    this.navCtrl.push(AccommodationPage, {
      item: item
    });
  }
  openRecommend(event, item){
    this.navCtrl.push(RecommendPage, {
      item: item
    });
  }
  openField(event, item){
    this.navCtrl.push(FieldPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
