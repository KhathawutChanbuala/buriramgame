import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserPage } from '../browser/browser';
/**
 * Generated class for the FieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})
export class FieldPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage(event, item) {
    this.navCtrl.push(BrowserPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FieldPage');
  }

}
