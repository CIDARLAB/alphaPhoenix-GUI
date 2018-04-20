import { Injectable } from '@angular/core';
import { HttpProvider } from "./http";
import {MenuProvider} from "./menu";
import {AlertController} from "ionic-angular";
import {OptionsProvider} from "./options";

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

  public loadingRegisrtry = false;
  public loadingCollection = false;




  constructor(private http:HttpProvider, private menu:MenuProvider,
              private alertCtrl:AlertController) {
    this.getCollection();
  }


  getCollection() {
    this.loadingRegisrtry = true;
    this.http.getUrl(['http://', this.registry,'/rootCollections'].join('')).then(data => {
      this.collectionOptions = [];
      for(let col of <any>data) {
        this.collectionOptions.push(col);
      }
      this.collection = data[0].uri;
      this.loadingRegisrtry = false;
    }).catch(err => {
      this.loadingRegisrtry = false;
    });
  }

}
