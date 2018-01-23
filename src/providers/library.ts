import { Injectable } from '@angular/core';
import { HttpProvider } from "./http";
import {MenuProvider} from "./menu";

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




  constructor(private http:HttpProvider, private menu:MenuProvider) {
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
      this.menuItem.status = 'Error'
    });
  }

  getParts() {
    this.http.getUrl(['http://', this.registry,'/remoteSearch/collection%3D%3C',encodeURIComponent(this.collection),'%3E&?offset=0&limit=1000'].join('')).then(data => {
      this.parts = <any>data;
      if(this.parts.length > 1) {
        this.menuItem.status = 'Complete'
      } else {
        this.menuItem.status = 'Warning'
      }
    }).catch(err => {
      this.menuItem.status = 'Error'
    });
  }

}
