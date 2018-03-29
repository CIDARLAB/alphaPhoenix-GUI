import { Injectable } from '@angular/core';
import {ModalController, NavController} from "ionic-angular";
import {PerformanceProvider} from "./performance";
import {StructuralProvider} from "./structural";
import {HttpProvider} from "./http";

@Injectable()
export class OptionsProvider {

  public projectName = '';
  public designTooltip = '';
  public sample;
  public samples = ['Full Demo','Not Gate','CIDAR','MIT'];
  public options = {
    function: 'deterministic',
    topP: 75,
  };
  public registries = ['https://synbiohub.programmingbiology.org/'];
  public collections = ['AlphaPhoenix'];

  public registry = this.registries[0];
  public collection = this.collections[0];

  constructor(public modalCtrl: ModalController, private http:HttpProvider, private navCtrl:NavController,
              private pref:PerformanceProvider, private strc: StructuralProvider) {
  }

  submitSpec() {
    let body = {
      token: this.http.token,
      project: this.projectName,
      eugene: this.strc.eugeneText,
      stl: this.pref.stlText,
      registry: this.registry,
      repository: this.collection
    };
    this.http.specification(body).toPromise().then(result=>{
      this.navCtrl.setRoot('DesignPage');
    }).catch(error=>{
      console.log(error);
    });
  }

  openFile(variable) {
    this.modalCtrl.create('FileUploadPage').present();
  }

  openGridTLI() {
    this.modalCtrl.create('GridTliPage').present();
  }

}
