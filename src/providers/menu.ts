import { Injectable } from '@angular/core';

@Injectable()
export class MenuProvider {

  public menu = [{
    title: 'Specification',
    pages: [{
      name: 'Performance',
      page: 'PerformancePage',
      status: 'None',
      message: ''
    },{
      name: 'Structural',
      page: 'StructuralPage',
      status: 'None',
      message: ''
    },{
      name: 'Library',
      page: 'LibraryPage',
      status: 'None',
      message: ''
    }]
  },{
    title: 'Design',
    pages: [{
      name: 'Assignment',
      page: 'AssignmentPage',
      status: 'None',
      message: ''
    },{
      name: 'Options',
      page: 'OptionsPage',
      status: 'None',
      message: ''
    }]
  },{
    title: 'Results',
    pages: [{
      name: 'Results',
      page: 'ResultsPage',
      status: 'None',
      message: ''
    }]
  }];

  public activePage = 'PerformancePage';

  constructor() {
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

}
