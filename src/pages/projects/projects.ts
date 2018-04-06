import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  public data = [{
    id: '0000',
    projectName: 'Project 1',
    specification: 'complete',
    design: 'complete',
    results: 'error',
    createdOn: new Date()
  },{
    id: '0001',
    projectName: 'Project 2',
    specification: 'complete',
    design: 'working',
    results: '',
    createdOn: new Date()
  }];

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
    public ops:OptionsProvider) {
    this.menuCtrl.enable(false);
  }


}
