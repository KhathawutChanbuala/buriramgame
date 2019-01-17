import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserPage } from '../browser/browser';

/**
 * Generated class for the MedalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medal',
  templateUrl: 'medal.html',
})
export class MedalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage(event, item) {
    this.navCtrl.push(BrowserPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedalPage');
  }

}
