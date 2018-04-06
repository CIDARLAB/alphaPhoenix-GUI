import { Injectable } from '@angular/core';
import {App, LoadingController, ModalController, PopoverController, ToastController} from "ionic-angular";
import {PerformanceProvider} from "./performance";
import {StructuralProvider} from "./structural";
import {HttpProvider} from "./http";

@Injectable()
export class OptionsProvider {

  public projectName = '';
  public designTooltip = '';
  public sample;
  public samples = [];
  public options = {
    function: 'deterministic',
    topP: 75,
  };
  public registries = ['https://synbiohub.programmingbiology.org/'];
  public collections = [{uri:'https://synbiohub.programmingbiology.org/public/AlphaPhoenix/AlphaPhoenix_collection/1',name:'AlphaPhoenix'}];

  public registry = this.registries[0];
  public collection = 'https://synbiohub.programmingbiology.org/public/AlphaPhoenix/AlphaPhoenix_collection/1';

  public loadingCollection;

  public examples;

  constructor(public modalCtrl: ModalController, private http:HttpProvider, private toast:ToastController,
              private pref:PerformanceProvider, private strc: StructuralProvider, private app:App,
              private loadingCtrl: LoadingController, private popoverCtrl:PopoverController) {
    this.getCollection().then(() => {
      this.collection = 'https://synbiohub.programmingbiology.org/public/AlphaPhoenix/AlphaPhoenix_collection/1';
    });
    this.http.getExample().then(examples => {
      this.examples = examples;
      this.samples = Object.keys(this.examples);
    });
  }

  submitSpec() {
    let body = {
      token: this.http.token,
      project: this.projectName,
      eugene: this.strc.eugeneText,
      stl: this.pref.stlText,
      registry: this.registry,
      collection: this.collection
    };
    let loading = this.loadingCtrl.create({
      content: 'Building Design.',
      dismissOnPageChange: true
    });
    loading.present();
    this.http.specification(body).toPromise().then(result=>{
      this.app.getRootNav().setRoot('DesignPage');
      return;
    }).catch(error=>{
      if(error.status == 200) {
        this.app.getRootNav().setRoot('DesignPage');
        return;
      }
      loading.dismiss();
      console.error(error);
      this.toast.create({
        message: error.message,
        position: 'bottom',
        showCloseButton: true,
        dismissOnPageChange: true,
        duration: 5000,
      }).present();
      return;
    });
  }

  openFile(variable) {
    this.modalCtrl.create('FileUploadPage').present();
  }

  openGridTLI() {
    this.modalCtrl.create('GridTliPage').present();
  }

  applySample() {
    this.strc.eugeneText = this.examples[this.sample]['eugene'];
    this.pref.stlText = this.examples[this.sample]['stl'];
  }

  getCollection() {
    return new Promise((resolve, reject) => {
      this.loadingCollection = true;
      let url = ['http://', this.registry,'/rootCollections'];
      if(this.registry.includes('http')) {
        url.shift();
      }
      if(this.registry[this.registry.length-1] == '/') {
        url[1] = 'rootCollections'
      }
      this.http.getUrl(url.join('')).then(data => {
        this.collections = [];
        for(let col of <any>data) {
          this.collections.push(col);
        }
        this.collection = data[0].uri;
        this.loadingCollection = false;
        resolve();
      }).catch(err => {
        console.log(err);
        reject();
      });
    });
  }

  openMenu(myEvent) {
    let popover = this.popoverCtrl.create('PopoverMenuPage');
    popover.present({
      ev: myEvent
    });
  }

}
