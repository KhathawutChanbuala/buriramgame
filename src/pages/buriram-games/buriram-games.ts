import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserPage } from '../browser/browser';


/**
 * Generated class for the BuriramGamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buriram-games',
  templateUrl: 'buriram-games.html',
})
export class BuriramGamesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage(event, item) {
    this.navCtrl.push(BrowserPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuriramGamesPage');
  }

}
