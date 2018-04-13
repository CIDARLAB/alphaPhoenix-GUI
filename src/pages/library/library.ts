import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController} from 'ionic-angular';
import { LibraryProvider } from "../../providers/library";
import { OptionsProvider } from "../../providers/options";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public lib:LibraryProvider,
              private ops:OptionsProvider, private menuCtrl:MenuController) {
    this.menuCtrl.enable(true);
  }

}
