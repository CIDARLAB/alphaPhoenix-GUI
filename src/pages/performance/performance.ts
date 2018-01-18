import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuProvider } from "../../providers/menu";

@IonicPage()
@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
})
export class PerformancePage {

  public mode = 'STL';
  public menuItem;

  constructor(public navCtrl: NavController, private menu: MenuProvider) {
    this.menuItem = this.menu.getMenuItem('PerformancePage');
    this.menuItem.status = 'Complete'
  }

  sample() {
    console.log(this.menu.menu)
  }

}
