import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  private team = [{
    title: 'Lead Developers',
    members: [{
      name: 'Prashant Vaidyanathan',
      img: 'https://avatars3.githubusercontent.com/u/2364721?s=460&v=4'
    },{
      name: 'Greg Frasco',
      img: 'https://avatars0.githubusercontent.com/u/5147346?s=460&v=4'
    },{
      name: 'Curtis Madsen',
      img: ''
    },{
      name: 'Evan Appleton',
      img: ''
    }]
  },{
    title: 'Bio Engineers',
    members: [{
      name: 'Nicholas DeLateur',
      img: ''
    }]
  },{
    title: 'Principle Investigators',
    members: [{
      name: 'Douglas Densmore',
      img: ''
    },{
      name: 'Ron Weiss',
      img: ''
    },{
      name: 'Calin Belta',
      img: ''
    }]
  }];

  public logos = [
    'cidar.png',
    'BDC.png',
    'sbc.png',
    'nsf.png',
    'sail.png'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
