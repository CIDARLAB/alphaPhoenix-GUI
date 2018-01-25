import { Injectable } from '@angular/core';
import { HttpProvider } from "./http";
import {MenuProvider} from "./menu";
import {AlertController} from "ionic-angular";

@Injectable()
export class LibraryProvider {

  public registry = 'synbiohub.programmingbiology.org';
  public registryOptions = [
    'synbiohub.org',
    'synbiohub.cidarlab.org',
    'synbiohub.programmingbiology.org'
  ];
  public collection;
  public collectionOptions = [];

  public parts = [];
  public menuItem;




  constructor(private http:HttpProvider, private menu:MenuProvider, private alertCtrl:AlertController) {
    this.getCollection();
    this.menuItem = this.menu.getMenuItem('LibraryPage');
  }


  getCollection() {
    this.http.getUrl(['http://', this.registry,'/rootCollections'].join('')).then(data => {
      this.collectionOptions = [];
      for(let col of <any>data) {
        this.collectionOptions.push(col);
      }
      this.collection = data[0].uri;
      this.getParts();
    }).catch(err => {
      this.menuItem.status = 'Error';
      this.menuItem.message = 'Error with collection search';
    });
  }

  getParts() {
    this.http.getUrl(['http://', this.registry,'/remoteSearch/collection%3D%3C',encodeURIComponent(this.collection),'%3E&?offset=0&limit=1000'].join('')).then(data => {
      this.parts = <any>data;
      if(this.parts.length > 1) {
        this.menuItem.status = 'Complete';
        this.menuItem.message = '';
      } else {
        this.menuItem.status = 'Warning';
        this.menuItem.message = 'No Part in collection';
      }
    }).catch(err => {
      this.menuItem.status = 'Error';
      this.menuItem.message = 'Error with parts search';
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Custom Registry',
      message: 'Please enter registry domain without http or www.',
      inputs: [
        {
          name: 'registry',
          placeholder: 'Registry'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Set',
          handler: data => {
            console.log(data);
            if(this.registryOptions.length > 3) {
              this.registryOptions.pop();
            }
            this.registryOptions.push(data.registry);
            this.registry = data.registry;
          }
        }
      ]
    });
    alert.present();
  }

}
