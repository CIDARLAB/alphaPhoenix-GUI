import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    results: 'complete',
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
