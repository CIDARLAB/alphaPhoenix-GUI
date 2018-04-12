import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public institutions = ['Boston University','Massachusetts Institute Of Technology'];
  public name;
  public institution;
  public email;
  public password;
  public confirmPassword;
  public error;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, private http:HttpProvider) {
    this.menuCtrl.enable(false);
  }

  signup() {
    this.error = null;
    if(!this.name || !this.institution || !this.password || !this.email || !this.confirmPassword) {
      this.error = 'Please fill out all required information';
      return;
    }
    if(this.confirmPassword != this.password) {
      this.error = 'Password do not match';
      return;
    }
    this.http.signup({
      "name": this.name,
      "institution": this.institution,
      "password": this.password,
      "email": this.email
    }).toPromise().then(result=> {
      this.http.setUserInfo(
        result['token'],
        result['id'],
        result['user'],
        result['session']
      );
      this.navCtrl.setRoot('ProjectsPage');
    }).catch(error => {
      this.error = 'Error';
    });
  }

}
