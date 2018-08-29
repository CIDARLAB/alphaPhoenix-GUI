import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http";
import {OptionsProvider} from "../../providers/options";


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private http: HttpProvider, private ops: OptionsProvider) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
