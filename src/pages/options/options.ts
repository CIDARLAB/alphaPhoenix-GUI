import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import { OptionsProvider } from "../../providers/options";

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  public height;
  private add;
  private newRegistry;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ops:OptionsProvider, public platform:Platform, private menuCtrl:MenuController) {
    //this.height = this.platform.height() - 275;
    this.menuCtrl.enable(true);
  }

  addRegistry() {
    this.ops.registries.push(this.newRegistry);
    this.newRegistry = '';
    this.add = false;
  }



}
