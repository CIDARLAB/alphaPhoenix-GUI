import { Injectable } from '@angular/core';

@Injectable()
export class OptionsProvider {

  public projectName = '';
  public designTooltip = '';
  public sample;
  public samples = ['Full Demo','Not Gate','CIDAR','MIT'];
  public options = {
    function: 'deterministic',
    topP: 75,
  }

  constructor() {

  }

}
