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
  }];

  constructor() {
  }

}
