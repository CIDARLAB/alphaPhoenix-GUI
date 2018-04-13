import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class HttpProvider {

  private assetUrl = 'assets/';
  private baseUrl = '/';
  //private baseUrl = 'http://localhost:9090/';
  public token;
  public id;
  public user;
  public session;

  constructor(public http: HttpClient, private storage: Storage) {
    this.getLoginInfo().then(info => {
      console.log(info);
      this.token = info[0];
      this.id = info[1];
      this.user = info[2];
      this.session = info[3];
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
    return this.http.post(this.baseUrl + 'login', JSON.stringify(body));
  }

  signup(body: any) {
    return this.http.post(this.baseUrl + 'signup', JSON.stringify(body));
  }

  projects() {
    let body = {
      id: this.id,
      token: this.token
    };
    return this.http.post(this.baseUrl + 'projects',JSON.stringify(body));
  }

  specification(body: any) {
    return this.http.post(this.baseUrl + 'specification', JSON.stringify(body));
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
      token: this.token,
      id: this.id
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'design',JSON.stringify(body)).subscribe(res => {
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

  getLoginInfo() {
    let promises = [
      this.storage.get('token'),
      this.storage.get('id'),
      this.storage.get('user'),
      this.storage.get('session')
    ];
    return Promise.all(promises);
  }

}
