import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoundPage } from '../pages/found/found';
import { SearchPage } from '../pages/search/search';
import { Camera } from '@ionic-native/camera';
import { DetailsPage } from '../pages/details/details';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MainPage } from '../pages/main/main';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FoundPage,
    SearchPage,
    DetailsPage,
    NotificationsPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FoundPage,
    SearchPage,
    DetailsPage,
    NotificationsPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
