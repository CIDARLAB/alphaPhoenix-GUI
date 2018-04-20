import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController } from 'ionic-angular';
import {HttpProvider} from "../../providers/http";
import 'rxjs/add/operator/map';
import {OptionsProvider} from "../../providers/options";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email;
  public password;
  public error;

  constructor(public navCtrl: NavController, public http: HttpProvider, private menuCtrl:MenuController, private ops:OptionsProvider) {
    this.menuCtrl.enable(false);
  }

  login() {
    this.error = null;
    if(!this.email || !this.password) {
      this.error = 'Please fill out all required information';
      return;
    }
    this.http.login({
      "email": this.email,
      "password": this.password
    }).toPromise().then(result=> {
      this.http.setUserInfo(
        result['token'],
        result['id'],
        result['user'],
        result['session']
      );
      this.ops.updateOptions();
      this.navCtrl.setRoot('ProjectsPage');
    }).catch(error => {
      this.error = 'Incorrect username or password';
    });
  }

}
