import { SignupPage } from './../Signup/signup';
import { ProfilePage } from './../Profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {
  
  constructor(public navCtrl: NavController) {

  }


  public gotoprofilepage(){
    this.navCtrl.push(ProfilePage);
  }

  public gotosignuppage(){
    this.navCtrl.push(SignupPage);
  }

  
  
}