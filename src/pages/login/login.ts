import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController } from 'ionic-angular';
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username;
  public password;

  constructor(public navCtrl: NavController, public http: HttpProvider, private menuCtrl:MenuController) {
    this.menuCtrl.enable(false);
  }

  login() {

    this.http.login({
      "username": this.username,
      "password": this.password
    }).subscribe((result)=> {
      console.log(result);
    });
  }

}
