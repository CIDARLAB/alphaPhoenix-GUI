import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";
import {MenuProvider} from "../../providers/menu";
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  private height;
  private menuItem;

  constructor(public navCtrl: NavController, public menu: MenuProvider,
              private ops: OptionsProvider, private menuCtrl: MenuController, private platform: Platform, public http: HttpProvider) {
    this.height = this.platform.height() - 171;
    this.menuItem = this.menu.getMenuItem('LibraryPage');
    this.ops.getCollection().then(() => {
      //this.ops.collection = null;
      this.updateCollection();
    }).catch(err => {
      this.ops.collections = []
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }


  updateRegistry() {
    this.ops.getCollection().then(() => {
      this.ops.collection = null;
      this.updateCollection();
    }).catch(err => {
      this.ops.collections = []
    });
  }

  updateCollection() {
    if (this.ops.collection) {
      this.menuItem.status = 'Complete';
    } else {
      this.menuItem.status = 'Error';
      this.menuItem.message = 'Select a collection';
    }
  }

}
