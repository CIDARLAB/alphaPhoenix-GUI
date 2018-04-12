import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class HttpProvider {

  private assetUrl = 'assets/';
  public token;
  public id;
  public user;
  public session;

  constructor(public http: HttpClient, private storage: Storage) {
    this.storage.get('token').then((token) =>{
      this.token = token;
    });
    this.storage.get('id').then((id) =>{
      this.id = id;
    });
    this.storage.get('user').then((user) =>{
      this.user = user;
    });
    this.storage.get('session').then((session) =>{
      this.session = session;
    });
  }

  setUserInfo(token,id,user,session) {
    this.token = token;
    this.id = id;
    this.user = user;
    this.session = session;
    this.storage.set('token',token);
    this.storage.set('id',id);
    this.storage.set('user',user);
    this.storage.set('session',session);
  }

  login(body: any) {
    return this.http.post('/login', JSON.stringify(body));
  }

  signup(body: any) {
    return this.http.post('/signup', JSON.stringify(body));
  }

  projects() {
    let body = {
      id: this.id,
      token: this.token
    };
    return this.http.post('/projects',JSON.stringify(body));
  }

  specification(body: any) {
    return this.http.post('/specification', JSON.stringify(body));
  }

  getDesign(projectId: any) {
    /*
    return new Promise((resolve, reject) => {
      this.http.get(this.assetUrl + 'json/design.json').subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
    */
    let body = {
      project: projectId,
      token: this.token
    };
    return new Promise((resolve, reject) => {
      this.http.post('/design',JSON.stringify(body)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getUrl(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getExample() {
    return new Promise((resolve, reject) => {
      this.http.get(this.assetUrl + 'json/examples.json').subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
