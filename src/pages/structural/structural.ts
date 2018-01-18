import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";

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

  constructor(public navCtrl: NavController, public menu: MenuProvider) {
    for(let i = 1; i <= 100; i ++) {
      this.options.push(i);
    }
    this.menu.getMenuItem('StructuralPage').status= 'Warning';
  }

}
