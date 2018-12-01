import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Notification} from '../../models/notification';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
notification: Notification;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.notification = this.navParams.get('notification');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
