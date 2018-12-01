import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Notification } from '../../models/notification'
import { DetailsPage } from '../details/details';
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notifications: Notification[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.notifications=[];
    this.notifications.push({rate:0.83,date:'22/04/1993'},{rate:0.45,date:'13/10/2003'});

  }
  NotificationClicked(notif: Notification) {
    this.navCtrl.push(DetailsPage,{notification:notif});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
