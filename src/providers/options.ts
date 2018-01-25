import { Injectable } from '@angular/core';

@Injectable()
export class OptionsProvider {

  public projectName = '';
  public sample;
  public samples = ['Sample 1','Sample 2','Sample 3'];

  constructor() {

  }

}
