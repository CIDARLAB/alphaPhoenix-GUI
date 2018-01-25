import { Injectable } from '@angular/core';

@Injectable()
export class OptionsProvider {

  public projectName = '';
  public sample;
  public samples = ['Full Demo','Not Gate','CIDAR','MIT'];

  constructor() {

  }

}
