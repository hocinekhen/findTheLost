import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { FoundPage } from '../found/found';
import { NotificationsPage } from '../notifications/notifications';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foundPage=FoundPage;
  notificationsPage = NotificationsPage;
  mainPage=MainPage;
  constructor(public navCtrl: NavController) {
  }

}
