import { Injectable } from '@angular/core';
import {OptionsProvider} from "./options";

@Injectable()
export class MenuProvider {

  public menu = [{
    title: 'Specification',
    active: true,
    pages: [{
      name: 'Performance',
      page: 'PerformancePage',
      status: 'None',
      message: ''
    },{
      name: 'Structural',
      page: 'StructuralPage',
      status: 'None',
      message: '',
    }]
  },{
    title: 'Design',
    active: false,
    pages:[]
  },{
    title: 'Results',
    active: false,
    pages:[]
  }];

  constructor(private ops:OptionsProvider) {
  }

  getMenuItem(page) {
    for(let i = 0; i < this.menu.length; i++){
      for(let j = 0; j < this.menu[i].pages.length; j++) {
        if(this.menu[i].pages[j].page == page) {
          return this.menu[i].pages[j]
        }
      }
    }
  }

  design() {
    if(!this.ops.projectName && this.ops.projectName == '' ) {
      this.ops.designTooltip = 'Missing Project Name';
      return false;
    } else if(this.menu[0].pages[0].status === 'Complete') {
      this.ops.designTooltip = 'Complete Performance Page';
      return false;
    } else if(this.menu[0].pages[1].status === 'Complete') {
      this.ops.designTooltip = 'Complete Structural Page';
      return false;
    }
    return true;
  }

}
