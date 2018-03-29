import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  private height;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController,
              private ops:OptionsProvider, public platform:Platform) {
    this.menuCtrl.enable(true);
    this.height = this.platform.height() - 180;
  }

}
