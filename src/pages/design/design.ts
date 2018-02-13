import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { OptionsProvider } from "../../providers/options";
import { DesignProvider } from "../../providers/design";

@IonicPage()
@Component({
  selector: 'page-design',
  templateUrl: 'design.html',
})
export class DesignPage {

  public height;
  public tabs = 'SBOL';

  constructor(public navCtrl: NavController, public ops: OptionsProvider,public design:DesignProvider, public platform:Platform) {
    console.log(design)
    this.height = this.platform.height()- 275;
  }

}
