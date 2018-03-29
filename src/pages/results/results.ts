import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, private ops:OptionsProvider) {
    this.menuCtrl.enable(true);
  }

}
