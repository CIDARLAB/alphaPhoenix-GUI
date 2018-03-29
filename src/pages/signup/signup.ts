import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  institutions = ['Boston University','Massachusetts Institute Of Technology'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController) {
    this.menuCtrl.enable(false);
  }

}
