import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { OptionsProvider } from "../../providers/options";

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  public height;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ops:OptionsProvider, public platform:Platform) {
    this.height = this.platform.height() - 275;
  }

}
