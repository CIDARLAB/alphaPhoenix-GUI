import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OptionsProvider } from "../../providers/options";
import { DesignProvider } from "../../providers/design";

@IonicPage()
@Component({
  selector: 'page-design',
  templateUrl: 'design.html',
})
export class DesignPage {

  constructor(public navCtrl: NavController, public ops: OptionsProvider,public design:DesignProvider) {
    console.log(design)
  }

}
