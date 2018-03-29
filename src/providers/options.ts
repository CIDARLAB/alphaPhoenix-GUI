import { Injectable } from '@angular/core';
import {App, ModalController, NavController, ToastController} from "ionic-angular";
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
  public collections = [{uri:'https://synbiohub.programmingbiology.org/public/AlphaPhoenix/AlphaPhoenix_collection/1',name:'AlphaPhoenix'}];

  public registry = this.registries[0];
  public collection = 'https://synbiohub.programmingbiology.org/public/AlphaPhoenix/AlphaPhoenix_collection/1';

  public loadingCollection;

  constructor(public modalCtrl: ModalController, private http:HttpProvider, private toast:ToastController,
              private pref:PerformanceProvider, private strc: StructuralProvider, private app:App) {
    this.getCollection().then(() => {
      this.collection = 'https://synbiohub.programmingbiology.org/public/AlphaPhoenix/AlphaPhoenix_collection/1';
    });
    console.log('test')
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
    this.http.specification(body).toPromise().then(result=>{
      this.app.getRootNav().setRoot('DesignPage');
    }).catch(error=>{
      this.toast.create({
        message: error.message,
        position: 'bottom',
        showCloseButton: true,
        dismissOnPageChange: true
      }).present();
    });
  }

  openFile(variable) {
    this.modalCtrl.create('FileUploadPage').present();
  }

  openGridTLI() {
    this.modalCtrl.create('GridTliPage').present();
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

}
