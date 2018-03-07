import { Injectable } from '@angular/core';
import {HttpProvider} from "./http";


@Injectable()
export class DesignProvider {

  public circuits = [];
  public activeCircuit = 1;
  public activeTU = 1;
  public activePart = [];
  public done = false;

  constructor(public http: HttpProvider) {
    this.http.getDesign().then(circuits => {
      this.circuits = <any>circuits;
      for(let i = 0; i < this.circuits.length; i++) {
        this.circuits[i].index = i + 1;
        for(let j = 0; j < this.circuits[i]['tus'].length; j++) {
          this.circuits[i]['tus'][j].parts = Object.keys(this.circuits[i]['tus'][j]);
          this.circuits[i]['tus'][j].parts.splice(this.circuits[i]['tus'][j].parts.indexOf('candidates'), 1);
          this.circuits[i]['tus'][j].index = j + 1;
          this.circuits[i]['tus'][j].active = j==0?true:false;
          if(j == 0) {
            this.activePart.push({
              activeTU: 1,
              activePart: this.circuits[i]['tus'][j].parts[0]
            });
          }
        }
      }
      console.log(this.circuits);
      this.done = true;
    });
  }

}
