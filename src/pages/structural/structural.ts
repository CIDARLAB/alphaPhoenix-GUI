import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-structural',
  templateUrl: 'structural.html',
})
export class StructuralPage {

  public options = [];
  public size = 1;
  public number = 1;
  public mode = 'eugene';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 1; i <= 100; i ++) {
      this.options.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StructuralPage');
  }

}
