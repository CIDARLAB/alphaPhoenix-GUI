import { Injectable } from '@angular/core';

@Injectable()
export class LibraryProvider {

  public registry;
  public registryOptions = [
    'synbiohub.org',
    'synbiohub.cidarlab.org',
    'synbiohub.programmingbiology.org'
  ];


  constructor() {

  }

}
