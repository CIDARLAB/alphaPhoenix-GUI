import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  public data = [];

  public columns : any = [{
    prop: 'projectName'
  },{
    name: 'Specification'
  },{
    name: 'Design'
  },{
    name: 'Results'
  },{
    name: 'Created On'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController,
    public ops:OptionsProvider, private http:HttpProvider) {
    this.menuCtrl.enable(false);
    let self = this;
    this.http.projects().toPromise().then(projects => {
      self.data = <any>projects;
      for(let project of this.data) {
        this.formatProject(project);
        project['createdOn'] = new Date(project['createdOn']).toLocaleDateString();
      }
    });
  }

  formatProject(project) {
    switch(project.step) {
      case "SPECIFY":
        project['specification'] = project.state;
        project['design'] = "not complete";
        project['results'] = "not complete";
        break;
      case "DESIGN":
        project['specification'] = 'COMPLETED';
        project['design'] = project.state;
        project['results'] = "not complete";
        break;
      case "RESULTS":
        project['specification'] = 'COMPLETED';
        project['design'] = 'COMPLETED';
        project['results'] = project.state;
        break;
    }
  }

}
