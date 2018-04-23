import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http";


@IonicPage({
  segment: 'reset/:key',
})
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  private key;
  private email;
  private password;
  private confirmPassword;
  private error;
  private complete = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpProvider, private menuCtrl:MenuController) {
    this.key = this.navParams.data['key'];
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  reset() {
    this.error = null;
    if(!this.email || !this.password || !this.confirmPassword) {
      this.error = 'PLease fill in all the required fields';
      return;
    }
    if(this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    let body = {
      key: this.key,
      email: this.email,
      password: this.password
    };
    this.http.reset(body).toPromise().then(res=> {
    }).catch(error => {
      if(error.status == 200) {
        this.complete = true;
      } else {
        this.error = error.error;
      }
    });;
  }

}
