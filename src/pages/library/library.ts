import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LibraryProvider } from "../../providers/library";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public lib:LibraryProvider) {
  }

}
