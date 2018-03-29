import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, private menuCrtl: MenuController) {
    this.menuCrtl.enable(false);
  }


}
