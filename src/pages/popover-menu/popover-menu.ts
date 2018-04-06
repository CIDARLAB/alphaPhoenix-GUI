import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover-menu',
  templateUrl: 'popover-menu.html',
})
export class PopoverMenuPage {

  constructor(public viewCtrl: ViewController,public navCtrl:NavController) {
  }

  openPage(page) {
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(page);
  }

}
