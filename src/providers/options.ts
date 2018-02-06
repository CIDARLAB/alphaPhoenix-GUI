import { Injectable } from '@angular/core';
import { ModalController } from "ionic-angular";

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

  constructor(public modalCtrl: ModalController) {

  }

  openFile(variable) {
    this.modalCtrl.create('FileUploadPage').present();
  }

  openGridTLI() {
    this.modalCtrl.create('GridTliPage').present();
  }

}
