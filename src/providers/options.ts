import { Injectable } from '@angular/core';
import {App, LoadingController, ModalController, PopoverController, ToastController} from "ionic-angular";
import {PerformanceProvider} from "./performance";
import {StructuralProvider} from "./structural";
import {HttpProvider} from "./http";

@Injectable()
export class OptionsProvider {

  //Project Name
  public projectName = '';

  public designTooltip = '';
  public sample;
  public samples = [];

  public topP = 10;
  public confidence = 0.95;
  public threshold = 0.9;
  public runCount = 100;

  public advUser = false;

  public emailOption = 'SendNotifications';

  public registries = [
    'https://synbiohub.org/',
    'https://synbiohub.cidarlab.org/',
    'https://synbiohub.programmingbiology.org/'
  ];
  public collections = [];

  public registry = this.registries[0];
  public collection = null;

  public loadingCollection;

  public examples;

  constructor(public modalCtrl: ModalController, private http:HttpProvider, private toast:ToastController,
              private pref:PerformanceProvider, private strc: StructuralProvider, private app:App,
              private loadingCtrl: LoadingController, private popoverCtrl:PopoverController) {
    this.getCollection().then(() => {});
    this.http.getExample().then(examples => {
      this.examples = examples;
      this.samples = Object.keys(this.examples);
    });
  }

  updateOptions() {
    if(this.http.user.advancedUser) {
      this.advUser = this.http.user.advancedUser;
    }
    if(this.http.user.emailOption){
      this.emailOption = this.http.user.emailOption;
    }
    if(this.http.user.registries){
      this.registries = JSON.parse(this.http.user.registries);
    }
  }

  submitSpec() {
    let body = {
      token: this.http.token,
      id: this.http.id,
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
      let projectId = result['projectID'][0];
      if(this.advUser) {
        this.app.getRootNav().setRoot('DesignPage',{id: projectId});
      } else {
        this.app.getRootNav().setRoot('ResultsPage',{id: projectId});
      }
      return;
    }).catch(error=>{
      if(error.status == 200) {
        let projectId = error['projectID'][0];
        if(this.advUser) {
          this.app.getRootNav().setRoot('DesignPage',{id: projectId});
        } else {
          this.app.getRootNav().setRoot('ResultsPage',{id: projectId});
        }
        return;
      }
      loading.dismiss();
      //console.error(error);
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
        //this.collection = data[0].uri;
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

  getUsername() {
    if(this.http.user) {
      return this.http.user.name;
    } else {
      return "Loading"
    }
  }

  saveUserOptions() {
    this.http.updateUsers({
      advUser: this.advUser,
      emailOption: this.emailOption,
      registries: this.registries
    }).toPromise().then(() => {

    }).catch(res => {
      if(res.status == 200) {
        this.http.user.advancedUser = this.advUser;
        this.http.user.emailOption = this.emailOption;
        this.http.user.registries = JSON.stringify(this.registries);
        this.http.updateUser();
        this.toast.create({
          message: 'Saved',
          position: 'bottom',
          showCloseButton: true,
          dismissOnPageChange: true,
          duration: 2000,
        }).present();
      } else {
        this.toast.create({
          message: res.message,
          position: 'bottom',
          showCloseButton: true,
          dismissOnPageChange: true,
          duration: 5000,
        }).present();
      }
    });
  }

}
