import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LibraryProvider } from "../../providers/library";
import { MenuProvider } from "../../providers/menu";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public menu: MenuProvider, public lib:LibraryProvider) {

    this.menu.getMenuItem('LibraryPage').status= 'Error';
  }

}
