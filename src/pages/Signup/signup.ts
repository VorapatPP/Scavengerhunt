import { LoginPage } from './../Login/login';

import { ProfilePage } from './../Profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  constructor(public navCtrl: NavController) {

  }

  public gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }

  public gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

}