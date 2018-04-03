import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  private height;
  private topHeight = 0.4;
  private tabs = 'SBOL';

  private data = [{
      x: [0, 1, 2, 3, 4, 5],
      y: [0, 1, 2, 3, 4, 5],
      type: 'scatter',
      name: 'trace 1'
    },{
      x: [1,2,3,4,5,6],
      y: [0,1,2,3,4,5],
      type: 'scatter',
    name: 'trace 2'
  }];

  private layout = {
    autosize: true,
    autoscale: false,
    height: this.height,
    margin: {
      l: 40,
      r: 0,
      b: 40,
      t: 20,
    },
    xaxis: {
      title: 'x-axis title'
    },
    yaxis: {
      title: 'y-axis title'
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController,
              private ops:OptionsProvider, public platform:Platform) {
    this.menuCtrl.enable(true);
    this.height = ((this.platform.height() - 140));
  }

}
