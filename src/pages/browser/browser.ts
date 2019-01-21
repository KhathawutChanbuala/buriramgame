import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private inAppBrowser:InAppBrowser,
              public loadingCtrl: LoadingController) {
      
      this.selectedItem=navParams.get('item');
      this.presentLoading();
      //alert(this.selectedItem);
      
  }
  // presentLoading() {
  //   this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     duration: 9000,
  //     dismissOnPageChange: true
  //   }).present();
  // }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_blank', options);

   // Inject scripts, css and more with browser.X
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');
  }

}
