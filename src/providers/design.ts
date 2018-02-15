import { Injectable } from '@angular/core';
import {HttpProvider} from "./http";


@Injectable()
export class DesignProvider {

  public circuits = [];
  public TUS = {};
  public activeCircuit = 1;
  public activeTUS = 1;
  public activePart = '';
  public done = false;


  constructor(public http: HttpProvider) {
    this.http.getDesign().then(circuits => {
      this.circuits = <any>circuits;
      for(let i = 0; i < this.circuits.length; i++) {
        this.circuits[i].index = i + 1;
      }
      for(let circuit of this.circuits) {
        let tus = [];
        for(let i = 0; i < circuit.tus.length; i++) {
          let tu = circuit.tus[i];
          tu.parts = Object.keys(tu);
          tu.parts.splice(tu.parts.indexOf('candidates'), 1);
          tu.index = i + 1;
          tus.push(tu);
        }
        this.TUS[circuit.index] = tus;
      }
      this.activePart = this.TUS[this.activeCircuit][0].parts[0];
      this.done = true;
    });
  }

}
