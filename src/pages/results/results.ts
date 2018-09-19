import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";
import {HttpProvider} from "../../providers/http";


@IonicPage({
  segment: 'results/:id',
})
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  private height;
  public topHeight = 0.4;
  public tabs = 'SBOL';
  private projectId;

  private data;
  private modules = {};
  private viewAssignment;
  private viewData;

  public layout = {
    autosize: true,
    autoscale: false,
    height: this.height,
    margin: {
      l: 40,
      r: 0,
      b: 40,
      t: 20,
    },
    hovermode: 'closest',
    /*
    xaxis: {
      title: 'x-axis title'
    },
    yaxis: {
      title: 'y-axis title'
    }*/
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
              public ops: OptionsProvider, public platform: Platform, public http: HttpProvider) {
    this.height = ((this.platform.height() - 140));
    this.projectId = this.navParams.get("id");
    this.http.getResults(this.projectId).then(data => {
      this.data = data;
      for(let result of this.data) {
        if(!this.modules[result.moduleid]) {
          this.modules[result.moduleid] = {};
        }
        if(!this.modules[result.moduleid][result.assignmentid]) {
          this.modules[result.moduleid][result.assignmentid] = {}
        }
        this.modules[result.moduleid][result.assignmentid]['assignment'] = result;
      }
      this.setView(this.data[0]);
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  setView(result) {
    this.viewAssignment = result;
    this.http.getResultData(this.projectId, this.viewAssignment.moduleid, this.viewAssignment.assignmentid).then((resultData) => {
      this.viewData = resultData;
      console.log(this.viewData);
    });
  }

}
