import { Injectable } from '@angular/core';
import {HttpProvider} from "./http";


@Injectable()
export class DesignProvider {

  public circuits = [];
  public activeCircuit = { tus: []};
  public activeTU = { candidates: []};

  constructor(public http: HttpProvider) {
    this.http.getDesign().then(circuits => {
      this.circuits = <any>circuits;
      for(let i = 0; i < this.circuits.length; i++) {
        this.circuits[i].index = i + 1;
      }
      this.activeCircuit = this.circuits[0]
    });
  }

  getTU() {
    let tus = [];
    for(let i = 0; i < this.activeCircuit['tus'].length; i++) {
      let tu = {
        index: i + 1,
        active: false,
        tus: [],
      };
      for(let key in this.activeCircuit['tus'][i]) {
        if(key != 'candidates') {
          tu.tus.push({
            key,
            candidates: this.activeCircuit['tus'][i][key].candidates
          });
        }
      }
      tus.push(tu);
    }
    if(tus[0]) {
      tus[0].active = true;
    }
    return tus;
  }

}
