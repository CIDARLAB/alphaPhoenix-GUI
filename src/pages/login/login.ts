import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username;
  public password;

  constructor(public navCtrl: NavController, public http: HttpProvider) {
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
