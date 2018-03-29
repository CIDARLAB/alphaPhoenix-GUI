import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  institutions = ['Boston University','Massachusetts Institute Of Technology'];
  public username;
  public email;
  public password;
  public confirmPassword;
  public error;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, private http:HttpProvider) {
    this.menuCtrl.enable(false);
  }

  signup() {
    this.error = null;
    if(!this.username || !this.password || !this.email || !this.confirmPassword) {
      this.error = 'Please fill out all required information';
      return;
    }
    if(this.confirmPassword != this.password) {
      this.error = 'Password do not match';
      return;
    }
    this.http.signup({
      "username": this.username,
      "password": this.password,
      "email": this.email
    }).toPromise().then(result=> {
      this.navCtrl.push('PerformancePage');
    }).catch(error => {
      this.error = 'Error';
    });
  }

}
