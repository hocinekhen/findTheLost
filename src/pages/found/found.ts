import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the FoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {
  base64Image:any;
  showLoading = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera) {
  }
  ionViewDidEnter() {
    document.getElementById("uploadBtn").classList.add('bounceBtn');

    document.getElementById("uploadBtn").classList.remove('fadeUpBtn');
    
    document.getElementById("imgInf").classList.remove('imgInfosDown');
    this.showLoading=false;

    }
  ionViewDidLoad() {
    console.log("found page did loaded");
    }
  choosephoto() {
    document.getElementById("uploadBtn").classList.remove('bounceBtn');

    document.getElementById("uploadBtn").classList.add('fadeUpBtn');
    
    document.getElementById("imgInf").classList.add('imgInfosDown');
    this.showLoading=true;
    //this.takePhoto(0);
  }
  takePhoto(sourceType:number) {
    //sourceType=0 =>from library, we can type this this.camera.PictureSourceType.PHOTOLIBRARY
    //sourceType=1 =>from camera, we can type this this.camera.PictureSourceType.CAMERA
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('lovviiii souad hayati')

       this.base64Image = 'data:image/jpeg;base64,' + imageData;
      
    }, (err) => {
      // Handle error
    });
  }
}
