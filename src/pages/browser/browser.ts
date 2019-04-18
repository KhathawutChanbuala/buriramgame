import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
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
  loader:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private inAppBrowser:InAppBrowser,
              public loadingCtrl: LoadingController) {
      
      this.selectedItem=navParams.get('item');
       //this.presentLoading();
      //alert(this.selectedItem);
      console.log('constructor..............');
      
  }
  // presentLoading() {
  //   this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     duration: 9000,
  //     dismissOnPageChange: true
  //   }).present();
  // }
  // presentLoading() {
  //   const loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //      //duration: 2000
  //   });
  //   loader.present();
    
  // }
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_blank', options);

   // Inject scripts, css and more with browser.X
  }

  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
       //duration: 2000
    });
    this.loader.present();
    console.log('ionViewDidLoad BrowserPage');
    document.getElementById('load').onload =  () => {
      console.log('Frame element loaded');
      this.loader.dismissAll();
    }

    
  }
  ionViewWillUnload(){
    this.loader.dismissAll();
  }

  

}
