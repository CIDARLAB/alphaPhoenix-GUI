import { Injectable } from '@angular/core';

@Injectable()
export class LibraryProvider {

  public registry = 'synbiohub.programmingbiology.org';
  public registryOptions = [
    'synbiohub.org',
    'synbiohub.cidarlab.org',
    'synbiohub.programmingbiology.org'
  ];
  public collection;
  public collectionOptions = [];


  constructor() {

  }

}
