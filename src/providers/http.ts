import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

  private assetUrl = 'assets/';
  private token;

  constructor(public http: HttpClient) {

  }

  login(body: any) {
    return this.http.post('/login', body);
  }

  signup(body: any) {
    return this.http.post('/signup', body);
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
