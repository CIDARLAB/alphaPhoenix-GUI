import {Component} from '@angular/core';
import {IonicPage, LoadingController, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
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
  private loadingData;
  private loadingScreen;

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
              private loading:LoadingController, public ops: OptionsProvider, public platform: Platform,
              public http: HttpProvider) {
    this.height = ((this.platform.height() - 140));
    this.projectId = this.navParams.get("id");
    this.loadingScreen = this.loading.create({
      content: "Downloading Results...",
    });
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
    this.loadingData = true;
    this.loadingScreen = this.loading.create({
      content: "Downloading Results...",
    });
    this.loadingScreen.present();
    this.viewAssignment = result;
    if(!this.modules[this.viewAssignment.moduleid][this.viewAssignment.assignmentid]['data']) {
      this.http.getResultData(this.projectId, this.viewAssignment.moduleid, this.viewAssignment.assignmentid).then((resultData) => {
        this.viewData = resultData;
        this.modules[this.viewAssignment.moduleid][this.viewAssignment.assignmentid]['data'] = resultData;
        this.loadingScreen.dismiss();
        this.loadingData = false;
      });
    } else {
      setTimeout(() => {
        this.viewData = this.modules[this.viewAssignment.moduleid][this.viewAssignment.assignmentid]['data'];
        this.loadingScreen.dismiss();
        this.loadingData = false;
      }, 1);
    }
  }

  download() {
    this.http.download(this.projectId, this.viewAssignment.moduleid, this.viewAssignment.assignmentid)
      .then(results => console.log(results)).catch(err => console.error(err))
  }
}
