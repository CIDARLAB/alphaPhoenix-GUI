import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
})
export class PerformancePage {

  public mode = 'STL';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
