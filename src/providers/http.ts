import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

  private assetUrl = 'assets/';
  public token;

  constructor(public http: HttpClient) {

  }

  login(body: any) {
    return this.http.post('/login', JSON.stringify(body));
  }

  signup(body: any) {
    return this.http.post('/signup', JSON.stringify(body));
  }

  specification(body: any) {
    return this.http.post('/specification', JSON.stringify(body));
  }

  getDesign() {
    return new Promise((resolve, reject) => {
      this.http.get(this.assetUrl + 'json/design.json').subscribe(res => {
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

}
