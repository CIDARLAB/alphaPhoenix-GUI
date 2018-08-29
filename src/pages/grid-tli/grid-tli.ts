import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-grid-tli',
  templateUrl: 'grid-tli.html',
})
export class GridTliPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  open() {
    window.open('https://github.com/CIDARLAB/GridTLI-GUI', '_self')
  }

}
